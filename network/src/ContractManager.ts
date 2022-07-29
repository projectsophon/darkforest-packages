import { Monomitter, monomitter } from "@darkforest_eth/events";
import { Contract, providers, Wallet } from "ethers";
import { ConnectionManager } from "./EthConnection";

export type ContractLoader<C extends Contract> = (
  address: string,
  provider: providers.JsonRpcProvider,
  signer: Wallet | undefined
) => Promise<C> | C;

export class ContractManager {
  /**
   * A private reference to all the contracts this {@link ContractManager} has loaded
   * so that they can be reloaded if the RPC url changes.
   *
   * Keyed by the contract address.
   */
  #contracts: Map<string, Contract>;

  /**
   * A private reference to all the contract loaders this {@link ContractManager} has loaded
   * so that they can be reloaded if the RPC url changes.
   *
   * Keyed by the contract address.
   */
  #loaders: Map<string, ContractLoader<Contract>>;

  /**
   * A private reference to the {@link ConnectionManager} used by this {@link ContractManager}.
   **/
  #connection: ConnectionManager;

  events: {
    /**
     * Whenever a contract is reloaded, we also publish an event here.
     */
    contractReloaded$: Monomitter<[string, Contract]>;
  };

  constructor(connection: ConnectionManager) {
    this.#connection = connection;
    this.#contracts = new Map();
    this.#loaders = new Map();

    this.events = {
      contractReloaded$: monomitter(),
    };

    this.#connection.events.providerChanged$.subscribe(() => {
      this.#reloadContracts();
    });

    this.#connection.events.signerChanged$.subscribe(() => {
      this.#reloadContracts();
    });
  }

  async #reloadContracts() {
    for (const [address, loader] of this.#loaders) {
      // Was going to dedupe this with `this.loadContract` but there is no reason to set the loader again.
      const contract = await loader(
        address,
        this.#connection.provider,
        this.#connection.signer
      );
      this.#contracts.set(address, contract);
      await this.events.contractReloaded$.publish([address, contract]);
    }
  }

  /**
   * Provides a {@link Contract} to the consumer. Will load a Contract, using the loader,
   * if it has never been loaded before.
   *
   * @param address The contract address to register the contract against.
   * @param loader The loader used to load (or reload) the contract.
   */
  async loadContract<C extends Contract>(
    address: string,
    loader?: ContractLoader<C>
  ): Promise<C> {
    if (!loader) {
      const contract = this.#contracts.get(address);
      if (!contract) {
        throw new Error(`Contract never loaded. Address: ${address}`);
      }
      return contract as C;
    } else {
      this.#loaders.set(address, loader);
      const contract = await loader(
        address,
        this.#connection.provider,
        this.#connection.signer
      );
      this.#contracts.set(address, contract);
      return contract;
    }
  }
}
