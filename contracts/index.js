/**
 * This package contains deployed contract addresses, ABIs, and Typechain types
 * for the Dark Forest game.
 *
 * ## Installation
 *
 * You can install this package using [`npm`](https://www.npmjs.com) or
 * [`yarn`](https://classic.yarnpkg.com/lang/en/) by running:
 *
 * ```bash
 * npm install --save @projectsophon/contracts
 * ```
 * ```bash
 * yarn add @projectsophon/contracts
 * ```
 *
 * When using this in a plugin, you might want to load it with [skypack](https://www.skypack.dev)
 *
 * ```js
 * import * as contracts from 'http://cdn.skypack.dev/@projectsophon/contracts'
 * ```
 *
 * ## Typechain
 *
 * The Typechain types can be found in the `typechain` directory.
 *
 * ## ABIs
 *
 * The contract ABIs can be found in the `abis` directory.
 *
 * @packageDocumentation
 */
/**
 * The name of the network where these contracts are deployed.
 */
export const NETWORK = "xdai";
/**
 * The id of the network where these contracts are deployed.
 */
export const NETWORK_ID = 100;
/**
 * The block in which the DarkForest contract was initialized.
 */
export const START_BLOCK = 20713468;
/**
 * The address for the DarkForest contract.
 */
export const CONTRACT_ADDRESS = "0x5da117b8aB8b739346F5EdC166789E5aFb1a7145";
/**
 * The address for the initalizer contract. Useful for lobbies.
 */
export const INIT_ADDRESS = "0x162564a30C73204A0b404D23A033bFBA377ADdc2";
//# sourceMappingURL=index.js.map