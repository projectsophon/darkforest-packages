import { Monomitter, monomitter } from "@darkforest_eth/events";
import { address } from "@darkforest_eth/serde";
import { EthAddress } from "@darkforest_eth/types";
import { providers, Wallet } from "ethers";

/**
 * Creates a new {@link providers.JsonRpcProvider}, and makes sure that it's connected to xDai if we're in
 * production.
 */
function makeProvider(rpcUrl: string): providers.JsonRpcProvider {
  let provider;

  if (rpcUrl.startsWith("wss://")) {
    provider = new providers.WebSocketProvider(rpcUrl);
  } else {
    provider = new providers.StaticJsonRpcProvider(rpcUrl);
    provider.pollingInterval = 8000;
  }

  return provider;
}

/**
 * Responsible for managing the RPC Provider and Signer's Wallet
 */
export class ConnectionManager {
  /**
   * The wallet, which represents the account that this {@link ConnectionManager} sends
   * transactions on behalf of.
   *
   * It is possible to instantiate an ConnectionManager without a signer, in which case it is still able
   * to connect to the blockchain, without the ability to send transactions.
   */
  signer: Wallet | undefined;

  /**
   * The provider this {@link ConnectionManager} is currently using. The provider is the lowest level
   * interface we use to communicate with the blockchain.
   *
   * Don't store a reference to this, as the provider can change!
   */
  provider: providers.JsonRpcProvider;

  events: {
    /**
     * Whenever a provider change occurs, we also publish an event here.
     */
    providerChanged$: Monomitter<providers.JsonRpcProvider>;
    /**
     * Whenever a signer change occurs, we also publish an event here.
     */
    signerChanged$: Monomitter<Wallet | undefined>;
  };

  constructor(rpcUrl: string) {
    this.provider = makeProvider(rpcUrl);
    this.events = {
      providerChanged$: monomitter(),
      signerChanged$: monomitter(),
    };
    this.events.providerChanged$.publish(this.provider);
  }

  get rpcUrl() {
    return this.provider.connection.url;
  }

  /**
   * Changes the RPC url we're connected to, and reloads the ethers contract references.
   */
  set rpcUrl(url: string) {
    if (typeof url !== "string") {
      throw new Error(`RPC url must be a string`);
    }
    if (url === "") {
      throw new Error("RPC url must not be empty");
    }

    this.provider = makeProvider(url);
    this.events.providerChanged$.publish(this.provider);
  }

  /**
   * Changes the ethereum account on behalf of which this {@link ConnectionManager} sends transactions.
   */
  set privateKey(skey: string | undefined) {
    if (skey) {
      this.signer = new Wallet(skey, this.provider);
    } else {
      this.signer = undefined;
    }
    this.events.signerChanged$.publish(this.signer);
  }

  /**
   * Returns the private key of the signer, if one was set.
   */
  get privateKey(): string | undefined {
    if (this.signer) {
      return this.signer.privateKey;
    }
  }

  hasSigner(): boolean {
    return !!this.signer;
  }

  /**
   * Returns the address of the signer, if one was set.
   */
  get account(): EthAddress | undefined {
    if (this.signer) {
      return address(this.signer.address);
    }
  }
}
