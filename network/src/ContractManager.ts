import { Store } from "@darkforest_eth/events";
import type { BaseContract, providers, Wallet } from "ethers";
import type { ConnectionManager } from "./ConnectionManager";

export type ContractLoader<C extends BaseContract> = (
  address: string,
  provider: providers.JsonRpcProvider,
  signer: Wallet | undefined
) => Promise<C>;

export class ContractManager extends Store {
  /**
   * A private reference to all the contracts this {@link ContractManager} has loaded
   * so that they can be reloaded if the RPC url changes.
   *
   * Keyed by the contract address.
   */
  #contracts: Map<string, BaseContract>;

  /**
   * A private reference to all the contract loaders this {@link ContractManager} has loaded
   * so that they can be reloaded if the RPC url changes.
   *
   * Keyed by the contract address.
   */
  #loaders: Map<string, ContractLoader<BaseContract>>;

  /**
   * A private reference to the {@link ConnectionManager} used by this {@link ContractManager}.
   **/
  #connection: ConnectionManager;

  constructor(connection: ConnectionManager) {
    super();

    this.#connection = connection;
    this.#contracts = new Map();
    this.#loaders = new Map();

    this.#connection.subscribe(() => {
      this.#reloadContracts();
    });
  }

  async #reloadContracts() {
    let needsNotify = false;

    for (const [address, loader] of this.#loaders) {
      // If we reload any contracts, we need to notify
      needsNotify = true;

      // Was going to dedupe this with `loadContract` but there is no reason to set the loader again.
      const contract = await loader(address, this.#connection.provider, this.#connection.signer);
      this.#contracts.set(address, contract);
    }

    if (needsNotify) {
      this.notify();
    }
  }

  /**
   * Provides a {@link Contract} to the consumer. Will load a Contract, using the loader,
   * if it has never been loaded before.
   *
   * @param address The contract address to register the contract against.
   * @param loader The loader used to load (or reload) the contract.
   */
  async loadContract<C extends BaseContract>(address: string, loader?: ContractLoader<C>): Promise<C> {
    if (!loader) {
      const contract = this.#contracts.get(address);
      if (!contract) {
        throw new Error(`Contract never loaded. Address: ${address}`);
      }
      return contract as C;
    } else {
      this.#loaders.set(address, loader);
      const contract = await loader(address, this.#connection.provider, this.#connection.signer);
      this.#contracts.set(address, contract);
      return contract;
    }
  }
}
