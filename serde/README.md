# @projectsophon/serde

This package contains serializers and deserializers for converting between
various representations of Dark Forest data, for example between raw data
received from blockchain calls to Dark Forest contracts and the typescript
types used across the client.

## Installation

You can install this package using [`npm`](https://www.npmjs.com) or
[`yarn`](https://classic.yarnpkg.com/lang/en/) by running:

```bash
npm install --save @projectsophon/serde
```
```bash
yarn add @projectsophon/serde
```

When using this in a plugin, you might want to load it with [skypack](https://www.skypack.dev)

```js
import * as serde from 'http://cdn.skypack.dev/@projectsophon/serde'
```

## Table of contents

### Functions

- [address](README.md#address)
- [hashToInt](README.md#hashtoint)
- [isNetworkEvent](README.md#isnetworkevent)
- [isUnconfirmedActivateArtifact](README.md#isunconfirmedactivateartifact)
- [isUnconfirmedActivateArtifactTx](README.md#isunconfirmedactivateartifacttx)
- [isUnconfirmedBuyHat](README.md#isunconfirmedbuyhat)
- [isUnconfirmedBuyHatTx](README.md#isunconfirmedbuyhattx)
- [isUnconfirmedCapturePlanet](README.md#isunconfirmedcaptureplanet)
- [isUnconfirmedCapturePlanetTx](README.md#isunconfirmedcaptureplanettx)
- [isUnconfirmedDeactivateArtifact](README.md#isunconfirmeddeactivateartifact)
- [isUnconfirmedDeactivateArtifactTx](README.md#isunconfirmeddeactivateartifacttx)
- [isUnconfirmedDepositArtifact](README.md#isunconfirmeddepositartifact)
- [isUnconfirmedDepositArtifactTx](README.md#isunconfirmeddepositartifacttx)
- [isUnconfirmedFindArtifact](README.md#isunconfirmedfindartifact)
- [isUnconfirmedFindArtifactTx](README.md#isunconfirmedfindartifacttx)
- [isUnconfirmedGetShips](README.md#isunconfirmedgetships)
- [isUnconfirmedGetShipsTx](README.md#isunconfirmedgetshipstx)
- [isUnconfirmedInit](README.md#isunconfirmedinit)
- [isUnconfirmedInitTx](README.md#isunconfirmedinittx)
- [isUnconfirmedInvadePlanet](README.md#isunconfirmedinvadeplanet)
- [isUnconfirmedInvadePlanetTx](README.md#isunconfirmedinvadeplanettx)
- [isUnconfirmedMove](README.md#isunconfirmedmove)
- [isUnconfirmedMoveTx](README.md#isunconfirmedmovetx)
- [isUnconfirmedProspectPlanet](README.md#isunconfirmedprospectplanet)
- [isUnconfirmedProspectPlanetTx](README.md#isunconfirmedprospectplanettx)
- [isUnconfirmedRelease](README.md#isunconfirmedrelease)
- [isUnconfirmedReleaseTx](README.md#isunconfirmedreleasetx)
- [isUnconfirmedReveal](README.md#isunconfirmedreveal)
- [isUnconfirmedRevealTx](README.md#isunconfirmedrevealtx)
- [isUnconfirmedTransfer](README.md#isunconfirmedtransfer)
- [isUnconfirmedTransferTx](README.md#isunconfirmedtransfertx)
- [isUnconfirmedUpgrade](README.md#isunconfirmedupgrade)
- [isUnconfirmedUpgradeTx](README.md#isunconfirmedupgradetx)
- [isUnconfirmedWithdrawArtifact](README.md#isunconfirmedwithdrawartifact)
- [isUnconfirmedWithdrawArtifactTx](README.md#isunconfirmedwithdrawartifacttx)
- [isUnconfirmedWithdrawSilver](README.md#isunconfirmedwithdrawsilver)
- [isUnconfirmedWithdrawSilverTx](README.md#isunconfirmedwithdrawsilvertx)
- [locationIdFromBigInt](README.md#locationidfrombigint)
- [locationIdFromDecStr](README.md#locationidfromdecstr)
- [locationIdFromEthersBN](README.md#locationidfromethersbn)
- [locationIdFromHexStr](README.md#locationidfromhexstr)
- [locationIdToDecStr](README.md#locationidtodecstr)

## Functions

### address

▸ **address**(`str`): `EthAddress`

Converts a string to an `EthAddress`: a 0x-prefixed all lowercase hex string
of 40 hex characters. An object of the `EthAddress` type should only ever be
initialized through this constructor-like method. Throws if the provided
string cannot be parsed as an Ethereum address.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | An address-like `string` |

#### Returns

`EthAddress`

___

### hashToInt

▸ **hashToInt**(`hash`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `hash` | `string` |

#### Returns

`number`

___

### isNetworkEvent

▸ **isNetworkEvent**(`event`): event is NetworkEvent

Returns whether or not the given event is an instance of NetworkEvent. Not super
stringent but works for now.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `any` |

#### Returns

event is NetworkEvent

___

### isUnconfirmedActivateArtifact

▸ **isUnconfirmedActivateArtifact**(`txIntent`): txIntent is UnconfirmedActivateArtifact

#### Parameters

| Name | Type |
| :------ | :------ |
| `txIntent` | `TxIntent` |

#### Returns

txIntent is UnconfirmedActivateArtifact

___

### isUnconfirmedActivateArtifactTx

▸ **isUnconfirmedActivateArtifactTx**(`tx`): tx is Transaction<UnconfirmedActivateArtifact\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | `Transaction`<`TxIntent`\> |

#### Returns

tx is Transaction<UnconfirmedActivateArtifact\>

___

### isUnconfirmedBuyHat

▸ **isUnconfirmedBuyHat**(`txIntent`): txIntent is UnconfirmedBuyHat

#### Parameters

| Name | Type |
| :------ | :------ |
| `txIntent` | `TxIntent` |

#### Returns

txIntent is UnconfirmedBuyHat

___

### isUnconfirmedBuyHatTx

▸ **isUnconfirmedBuyHatTx**(`tx`): tx is Transaction<UnconfirmedBuyHat\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | `Transaction`<`TxIntent`\> |

#### Returns

tx is Transaction<UnconfirmedBuyHat\>

___

### isUnconfirmedCapturePlanet

▸ **isUnconfirmedCapturePlanet**(`txIntent`): txIntent is UnconfirmedCapturePlanet

#### Parameters

| Name | Type |
| :------ | :------ |
| `txIntent` | `TxIntent` |

#### Returns

txIntent is UnconfirmedCapturePlanet

___

### isUnconfirmedCapturePlanetTx

▸ **isUnconfirmedCapturePlanetTx**(`tx`): tx is Transaction<UnconfirmedCapturePlanet\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | `Transaction`<`TxIntent`\> |

#### Returns

tx is Transaction<UnconfirmedCapturePlanet\>

___

### isUnconfirmedDeactivateArtifact

▸ **isUnconfirmedDeactivateArtifact**(`txIntent`): txIntent is UnconfirmedDeactivateArtifact

#### Parameters

| Name | Type |
| :------ | :------ |
| `txIntent` | `TxIntent` |

#### Returns

txIntent is UnconfirmedDeactivateArtifact

___

### isUnconfirmedDeactivateArtifactTx

▸ **isUnconfirmedDeactivateArtifactTx**(`tx`): tx is Transaction<UnconfirmedDeactivateArtifact\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | `Transaction`<`TxIntent`\> |

#### Returns

tx is Transaction<UnconfirmedDeactivateArtifact\>

___

### isUnconfirmedDepositArtifact

▸ **isUnconfirmedDepositArtifact**(`txIntent`): txIntent is UnconfirmedDepositArtifact

#### Parameters

| Name | Type |
| :------ | :------ |
| `txIntent` | `TxIntent` |

#### Returns

txIntent is UnconfirmedDepositArtifact

___

### isUnconfirmedDepositArtifactTx

▸ **isUnconfirmedDepositArtifactTx**(`tx`): tx is Transaction<UnconfirmedDepositArtifact\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | `Transaction`<`TxIntent`\> |

#### Returns

tx is Transaction<UnconfirmedDepositArtifact\>

___

### isUnconfirmedFindArtifact

▸ **isUnconfirmedFindArtifact**(`txIntent`): txIntent is UnconfirmedFindArtifact

#### Parameters

| Name | Type |
| :------ | :------ |
| `txIntent` | `TxIntent` |

#### Returns

txIntent is UnconfirmedFindArtifact

___

### isUnconfirmedFindArtifactTx

▸ **isUnconfirmedFindArtifactTx**(`tx`): tx is Transaction<UnconfirmedFindArtifact\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | `Transaction`<`TxIntent`\> |

#### Returns

tx is Transaction<UnconfirmedFindArtifact\>

___

### isUnconfirmedGetShips

▸ **isUnconfirmedGetShips**(`txIntent`): txIntent is UnconfirmedGetShips

#### Parameters

| Name | Type |
| :------ | :------ |
| `txIntent` | `TxIntent` |

#### Returns

txIntent is UnconfirmedGetShips

___

### isUnconfirmedGetShipsTx

▸ **isUnconfirmedGetShipsTx**(`tx`): tx is Transaction<UnconfirmedGetShips\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | `Transaction`<`TxIntent`\> |

#### Returns

tx is Transaction<UnconfirmedGetShips\>

___

### isUnconfirmedInit

▸ **isUnconfirmedInit**(`txIntent`): txIntent is UnconfirmedInit

#### Parameters

| Name | Type |
| :------ | :------ |
| `txIntent` | `TxIntent` |

#### Returns

txIntent is UnconfirmedInit

___

### isUnconfirmedInitTx

▸ **isUnconfirmedInitTx**(`tx`): tx is Transaction<UnconfirmedInit\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | `Transaction`<`TxIntent`\> |

#### Returns

tx is Transaction<UnconfirmedInit\>

___

### isUnconfirmedInvadePlanet

▸ **isUnconfirmedInvadePlanet**(`txIntent`): txIntent is UnconfirmedInvadePlanet

#### Parameters

| Name | Type |
| :------ | :------ |
| `txIntent` | `TxIntent` |

#### Returns

txIntent is UnconfirmedInvadePlanet

___

### isUnconfirmedInvadePlanetTx

▸ **isUnconfirmedInvadePlanetTx**(`tx`): tx is Transaction<UnconfirmedInvadePlanet\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | `Transaction`<`TxIntent`\> |

#### Returns

tx is Transaction<UnconfirmedInvadePlanet\>

___

### isUnconfirmedMove

▸ **isUnconfirmedMove**(`txIntent`): txIntent is UnconfirmedMove

#### Parameters

| Name | Type |
| :------ | :------ |
| `txIntent` | `TxIntent` |

#### Returns

txIntent is UnconfirmedMove

___

### isUnconfirmedMoveTx

▸ **isUnconfirmedMoveTx**(`tx`): tx is Transaction<UnconfirmedMove\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | `Transaction`<`TxIntent`\> |

#### Returns

tx is Transaction<UnconfirmedMove\>

___

### isUnconfirmedProspectPlanet

▸ **isUnconfirmedProspectPlanet**(`txIntent`): txIntent is UnconfirmedProspectPlanet

#### Parameters

| Name | Type |
| :------ | :------ |
| `txIntent` | `TxIntent` |

#### Returns

txIntent is UnconfirmedProspectPlanet

___

### isUnconfirmedProspectPlanetTx

▸ **isUnconfirmedProspectPlanetTx**(`tx`): tx is Transaction<UnconfirmedProspectPlanet\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | `Transaction`<`TxIntent`\> |

#### Returns

tx is Transaction<UnconfirmedProspectPlanet\>

___

### isUnconfirmedRelease

▸ **isUnconfirmedRelease**(`txIntent`): txIntent is UnconfirmedMove

#### Parameters

| Name | Type |
| :------ | :------ |
| `txIntent` | `TxIntent` |

#### Returns

txIntent is UnconfirmedMove

___

### isUnconfirmedReleaseTx

▸ **isUnconfirmedReleaseTx**(`tx`): tx is Transaction<UnconfirmedMove\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | `Transaction`<`TxIntent`\> |

#### Returns

tx is Transaction<UnconfirmedMove\>

___

### isUnconfirmedReveal

▸ **isUnconfirmedReveal**(`txIntent`): txIntent is UnconfirmedReveal

#### Parameters

| Name | Type |
| :------ | :------ |
| `txIntent` | `TxIntent` |

#### Returns

txIntent is UnconfirmedReveal

___

### isUnconfirmedRevealTx

▸ **isUnconfirmedRevealTx**(`tx`): tx is Transaction<UnconfirmedReveal\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | `Transaction`<`TxIntent`\> |

#### Returns

tx is Transaction<UnconfirmedReveal\>

___

### isUnconfirmedTransfer

▸ **isUnconfirmedTransfer**(`txIntent`): txIntent is UnconfirmedPlanetTransfer

#### Parameters

| Name | Type |
| :------ | :------ |
| `txIntent` | `TxIntent` |

#### Returns

txIntent is UnconfirmedPlanetTransfer

___

### isUnconfirmedTransferTx

▸ **isUnconfirmedTransferTx**(`tx`): tx is Transaction<UnconfirmedPlanetTransfer\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | `Transaction`<`TxIntent`\> |

#### Returns

tx is Transaction<UnconfirmedPlanetTransfer\>

___

### isUnconfirmedUpgrade

▸ **isUnconfirmedUpgrade**(`txIntent`): txIntent is UnconfirmedUpgrade

#### Parameters

| Name | Type |
| :------ | :------ |
| `txIntent` | `TxIntent` |

#### Returns

txIntent is UnconfirmedUpgrade

___

### isUnconfirmedUpgradeTx

▸ **isUnconfirmedUpgradeTx**(`tx`): tx is Transaction<UnconfirmedUpgrade\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | `Transaction`<`TxIntent`\> |

#### Returns

tx is Transaction<UnconfirmedUpgrade\>

___

### isUnconfirmedWithdrawArtifact

▸ **isUnconfirmedWithdrawArtifact**(`txIntent`): txIntent is UnconfirmedWithdrawArtifact

#### Parameters

| Name | Type |
| :------ | :------ |
| `txIntent` | `TxIntent` |

#### Returns

txIntent is UnconfirmedWithdrawArtifact

___

### isUnconfirmedWithdrawArtifactTx

▸ **isUnconfirmedWithdrawArtifactTx**(`tx`): tx is Transaction<UnconfirmedWithdrawArtifact\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | `Transaction`<`TxIntent`\> |

#### Returns

tx is Transaction<UnconfirmedWithdrawArtifact\>

___

### isUnconfirmedWithdrawSilver

▸ **isUnconfirmedWithdrawSilver**(`txIntent`): txIntent is UnconfirmedWithdrawSilver

#### Parameters

| Name | Type |
| :------ | :------ |
| `txIntent` | `TxIntent` |

#### Returns

txIntent is UnconfirmedWithdrawSilver

___

### isUnconfirmedWithdrawSilverTx

▸ **isUnconfirmedWithdrawSilverTx**(`tx`): tx is Transaction<UnconfirmedWithdrawSilver\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | `Transaction`<`TxIntent`\> |

#### Returns

tx is Transaction<UnconfirmedWithdrawSilver\>

___

### locationIdFromBigInt

▸ **locationIdFromBigInt**(`location`): `LocationId`

Converts a BigInteger representation of location ID into a LocationID: a
non-0x-prefixed all lowercase hex string of exactly 64 hex characters
(0-padded). LocationIDs should only be instantiated through
`locationIdFromHexStr`, `locationIdFromDecStr`, `locationIdFromBigInt`, and
`locationIdFromEthersBN`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `location` | `bigint` | `BigInteger` representation of a location ID. |

#### Returns

`LocationId`

___

### locationIdFromDecStr

▸ **locationIdFromDecStr**(`location`): `LocationId`

Converts a string representing a decimal number into a LocationID: a
non-0x-prefixed all lowercase hex string of exactly 64 hex characters
(0-padded if necessary). LocationIDs should only be instantiated through
`locationIdFromHexStr`, `locationIdFromDecStr`, `locationIdFromBigInt`, and
`locationIdFromEthersBN`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `location` | `string` | `string` of decimal digits, the base 10 representation of a location ID. |

#### Returns

`LocationId`

___

### locationIdFromEthersBN

▸ **locationIdFromEthersBN**(`location`): `LocationId`

Converts an ethers.js BigNumber (type aliased here as `EthersBN`)
representation of a location ID into a LocationID: a non-0x-prefixed all
lowercase hex string of exactly 64 hex characters (0-padded). LocationIDs
should only be instantiated through `locationIdFromHexStr`,
`locationIdFromDecStr`, `locationIdFromBigInt`, and `locationIdFromEthersBN`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `location` | `BigNumber` | ethers.js `BigNumber` representation of a locationID. |

#### Returns

`LocationId`

___

### locationIdFromHexStr

▸ **locationIdFromHexStr**(`location`): `LocationId`

Converts a possibly 0x-prefixed string of hex digits to a `LocationId`: a
non-0x-prefixed all lowercase hex string of exactly 64 hex characters
(0-padded if necessary). LocationIDs should only be instantiated through
`locationIdFromHexStr`, `locationIdFromDecStr`, `locationIdFromBigInt`, and
`locationIdFromEthersBN`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `location` | `string` | A possibly 0x-prefixed `string` of hex digits representing a location ID. |

#### Returns

`LocationId`

___

### locationIdToDecStr

▸ **locationIdToDecStr**(`locationId`): `string`

Converts a LocationID to a decimal string with the same numerical value; can
be used if you need to pass an artifact ID into a web3 call.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `locationId` | `LocationId` | LocationID to convert into a `string` of decimal digits |

#### Returns

`string`
