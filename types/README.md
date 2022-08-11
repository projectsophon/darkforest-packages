# @projectsophon/types

This package contains commonly-used data types in the Dark Forest webclient,
also accessible in node.js server environments.

## Installation

You can install this package using [`npm`](https://www.npmjs.com) or
[`yarn`](https://classic.yarnpkg.com/lang/en/) by running:

```bash
npm install --save @projectsophon/types
```
```bash
yarn add @projectsophon/types
```

When using this in a plugin, you might want to load it with [skypack](https://www.skypack.dev)

```js
import * as types from 'http://cdn.skypack.dev/@projectsophon/types'
```

## Table of contents

### Classes

- [DFAnimation](classes/DFAnimation.md)
- [DFStatefulAnimation](classes/DFStatefulAnimation.md)

### Interfaces

- [ArrivalWithTimer](interfaces/ArrivalWithTimer.md)
- [AsteroidRendererType](interfaces/AsteroidRendererType.md)
- [BackgroundRendererType](interfaces/BackgroundRendererType.md)
- [BaseRenderer](interfaces/BaseRenderer.md)
- [BeltRendererType](interfaces/BeltRendererType.md)
- [BlackDomainRendererType](interfaces/BlackDomainRendererType.md)
- [CanvasCoords](interfaces/CanvasCoords.md)
- [CaptureZoneRendererType](interfaces/CaptureZoneRendererType.md)
- [Chunk](interfaces/Chunk.md)
- [CircleRendererType](interfaces/CircleRendererType.md)
- [DeleteMessagesRequest](interfaces/DeleteMessagesRequest.md)
- [DiagnosticUpdater](interfaces/DiagnosticUpdater.md)
- [Diagnostics](interfaces/Diagnostics.md)
- [EmojiFlagBody](interfaces/EmojiFlagBody.md)
- [GameViewport](interfaces/GameViewport.md)
- [GasPrices](interfaces/GasPrices.md)
- [IRendererConfig](interfaces/IRendererConfig.md)
- [Leaderboard](interfaces/Leaderboard.md)
- [LeaderboardEntry](interfaces/LeaderboardEntry.md)
- [LineRendererType](interfaces/LineRendererType.md)
- [MineBodyRendererType](interfaces/MineBodyRendererType.md)
- [MineRendererType](interfaces/MineRendererType.md)
- [ModalPosition](interfaces/ModalPosition.md)
- [NetworkEvent](interfaces/NetworkEvent.md)
- [PerlinConfig](interfaces/PerlinConfig.md)
- [PerlinRendererType](interfaces/PerlinRendererType.md)
- [PersistedTransaction](interfaces/PersistedTransaction.md)
- [PlanetCosmeticInfo](interfaces/PlanetCosmeticInfo.md)
- [PlanetDefaults](interfaces/PlanetDefaults.md)
- [PlanetMessage](interfaces/PlanetMessage.md)
- [PlanetMessageRequest](interfaces/PlanetMessageRequest.md)
- [PlanetMessageResponse](interfaces/PlanetMessageResponse.md)
- [PlanetRenderInfo](interfaces/PlanetRenderInfo.md)
- [PlanetRenderManagerType](interfaces/PlanetRenderManagerType.md)
- [PlanetRendererType](interfaces/PlanetRendererType.md)
- [PostMessageRequest](interfaces/PostMessageRequest.md)
- [QuasarBodyRendererType](interfaces/QuasarBodyRendererType.md)
- [QuasarRayRendererType](interfaces/QuasarRayRendererType.md)
- [QuasarRendererType](interfaces/QuasarRendererType.md)
- [QueuedArrival](interfaces/QueuedArrival.md)
- [Radii](interfaces/Radii.md)
- [RectRendererType](interfaces/RectRendererType.md)
- [Rectangle](interfaces/Rectangle.md)
- [RenderedArtifact](interfaces/RenderedArtifact.md)
- [RingRendererType](interfaces/RingRendererType.md)
- [RuinsRendererType](interfaces/RuinsRendererType.md)
- [SignedMessage](interfaces/SignedMessage.md)
- [SpaceRendererType](interfaces/SpaceRendererType.md)
- [SpacetimeRipRendererType](interfaces/SpacetimeRipRendererType.md)
- [SpriteRendererType](interfaces/SpriteRendererType.md)
- [TextRendererType](interfaces/TextRendererType.md)
- [Transaction](interfaces/Transaction.md)
- [TransactionCollection](interfaces/TransactionCollection.md)
- [UIRendererType](interfaces/UIRendererType.md)
- [UnminedRendererType](interfaces/UnminedRendererType.md)
- [VoyageRendererType](interfaces/VoyageRendererType.md)
- [WormholeRendererType](interfaces/WormholeRendererType.md)

### Other Type Aliases

- [ArrivalType](README.md#arrivaltype)
- [Artifact](README.md#artifact)
- [ArtifactId](README.md#artifactid)
- [ArtifactPointValues](README.md#artifactpointvalues)
- [ArtifactRarity](README.md#artifactrarity)
- [ArtifactType](README.md#artifacttype)
- [AttribProps](README.md#attribprops)
- [AttribType](README.md#attribtype)
- [AutoGasSetting](README.md#autogassetting)
- [Biome](README.md#biome)
- [CaptureZone](README.md#capturezone)
- [ClaimedCoords](README.md#claimedcoords)
- [ClaimedLocation](README.md#claimedlocation)
- [ContractMethodName](README.md#contractmethodname)
- [CursorState](README.md#cursorstate)
- [DrawMode](README.md#drawmode)
- [EthAddress](README.md#ethaddress)
- [EthTxStatus](README.md#ethtxstatus)
- [HSLVec](README.md#hslvec)
- [HatType](README.md#hattype)
- [LocatablePlanet](README.md#locatableplanet)
- [LocationId](README.md#locationid)
- [ModalId](README.md#modalid)
- [ModalManagerEvent](README.md#modalmanagerevent)
- [ModalName](README.md#modalname)
- [ModalPositions](README.md#modalpositions)
- [NFTMetadata](README.md#nftmetadata)
- [NetworkHealthSummary](README.md#networkhealthsummary)
- [Planet](README.md#planet)
- [PlanetBonus](README.md#planetbonus)
- [PlanetLevel](README.md#planetlevel)
- [PlanetMessageBody](README.md#planetmessagebody)
- [PlanetMessageType](README.md#planetmessagetype)
- [PlanetType](README.md#planettype)
- [Player](README.md#player)
- [PluginId](README.md#pluginid)
- [RGBAVec](README.md#rgbavec)
- [RGBVec](README.md#rgbvec)
- [RegisterResponse](README.md#registerresponse)
- [RenderZIndex](README.md#renderzindex)
- [RendererProgram](README.md#rendererprogram)
- [RendererType](README.md#renderertype)
- [RevealedCoords](README.md#revealedcoords)
- [RevealedLocation](README.md#revealedlocation)
- [RuinsInfo](README.md#ruinsinfo)
- [Scaling](README.md#scaling)
- [Setting](README.md#setting)
- [SpaceColorConfiguration](README.md#spacecolorconfiguration)
- [SpaceType](README.md#spacetype)
- [TextAlign](README.md#textalign)
- [TextAnchor](README.md#textanchor)
- [TooltipName](README.md#tooltipname)
- [TransactionId](README.md#transactionid)
- [Translation](README.md#translation)
- [UniformJSType](README.md#uniformjstype)
- [UniformProps](README.md#uniformprops)
- [UniformType](README.md#uniformtype)
- [Upgrade](README.md#upgrade)
- [UpgradeBranchName](README.md#upgradebranchname)
- [UpgradeBranches](README.md#upgradebranches)
- [UpgradeLevels](README.md#upgradelevels)
- [UpgradeState](README.md#upgradestate)
- [Vec3](README.md#vec3)
- [VoyageId](README.md#voyageid)
- [WhitelistStatusResponse](README.md#whiteliststatusresponse)
- [WorldCoords](README.md#worldcoords)
- [WorldLocation](README.md#worldlocation)
- [Wormhole](README.md#wormhole)

### Type Type Aliases

- [Abstract](README.md#abstract)

### Variables

- [ArrivalType](README.md#arrivaltype-1)
- [ArtifactRarity](README.md#artifactrarity-1)
- [ArtifactRarityNames](README.md#artifactraritynames)
- [ArtifactType](README.md#artifacttype-1)
- [ArtifactTypeNames](README.md#artifacttypenames)
- [AttribType](README.md#attribtype-1)
- [AutoGasSetting](README.md#autogassetting-1)
- [Biome](README.md#biome-1)
- [BiomeNames](README.md#biomenames)
- [CursorState](README.md#cursorstate-1)
- [DrawMode](README.md#drawmode-1)
- [HatType](README.md#hattype-1)
- [ModalManagerEvent](README.md#modalmanagerevent-1)
- [ModalName](README.md#modalname-1)
- [PlanetLevel](README.md#planetlevel-1)
- [PlanetLevelNames](README.md#planetlevelnames)
- [PlanetMessageType](README.md#planetmessagetype-1)
- [PlanetType](README.md#planettype-1)
- [PlanetTypeNames](README.md#planettypenames)
- [RenderZIndex](README.md#renderzindex-1)
- [RendererType](README.md#renderertype-1)
- [Setting](README.md#setting-1)
- [SpaceType](README.md#spacetype-1)
- [SpaceTypeNames](README.md#spacetypenames)
- [TextAlign](README.md#textalign-1)
- [TextAnchor](README.md#textanchor-1)
- [TooltipName](README.md#tooltipname-1)
- [UniformType](README.md#uniformtype-1)
- [UpgradeBranchName](README.md#upgradebranchname-1)

### Functions

- [artifactNameFromArtifact](README.md#artifactnamefromartifact)

## Other Type Aliases

### ArrivalType

Ƭ **ArrivalType**: [`Abstract`](README.md#abstract)<`number`, ``"ArrivalType"``\>

Abstract type representing an arrival type.

___

### Artifact

Ƭ **Artifact**: `Object`

Represents data associated with a Dark Forest artifact NFT. Note
that some `Artifact` fields store client-specific data that the blockchain is
not aware of, such as `unconfirmedDepositArtifact` (tracks pending
depositArtifact transaction that involves this artifact). If you're using a
client that can't send transactions, these fields should be ignored.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `activations` | `number` |
| `artifactType` | [`ArtifactType`](README.md#artifacttype-1) |
| `controller` | [`EthAddress`](README.md#ethaddress) |
| `currentOwner` | [`EthAddress`](README.md#ethaddress) |
| `discoverer` | [`EthAddress`](README.md#ethaddress) |
| `id` | [`ArtifactId`](README.md#artifactid) |
| `isInititalized` | `boolean` |
| `lastActivated` | `number` |
| `lastDeactivated` | `number` |
| `mintedAtTimestamp` | `number` |
| `onPlanetId?` | [`LocationId`](README.md#locationid) |
| `onVoyageId?` | [`VoyageId`](README.md#voyageid) |
| `planetBiome` | [`Biome`](README.md#biome-1) |
| `planetDiscoveredOn` | [`LocationId`](README.md#locationid) |
| `rarity` | [`ArtifactRarity`](README.md#artifactrarity-1) |
| `timeDelayedUpgrade` | [`Upgrade`](README.md#upgrade) |
| `transactions?` | [`TransactionCollection`](interfaces/TransactionCollection.md) |
| `upgrade` | [`Upgrade`](README.md#upgrade) |
| `wormholeTo?` | [`LocationId`](README.md#locationid) |

___

### ArtifactId

Ƭ **ArtifactId**: [`Abstract`](README.md#abstract)<`string`, ``"ArtifactId"``\>

A unique identifier for a Dark Forest NFT artifact. This is a 64-character
lowercase hex string not prefixed with 0x. ArtifactIDs should only be
instantiated through ArtifactIDs should only be instantiated through
`artifactIdFromHexStr`, `artifactIdFromDecStr`, and `artifactIdFromEthersBN`
in `serde`.

___

### ArtifactPointValues

Ƭ **ArtifactPointValues**: `Object`

mapping from ArtifactRarity to points earned for finding this artifact.

#### Index signature

▪ [ArtifactRarity: `number`]: `number`

___

### ArtifactRarity

Ƭ **ArtifactRarity**: [`Abstract`](README.md#abstract)<`number`, ``"ArtifactRarity"``\>

Abstract type representing an artifact rarity level.

___

### ArtifactType

Ƭ **ArtifactType**: [`Abstract`](README.md#abstract)<`number`, ``"ArtifactType"``\>

Abstract type representing an artifact type.

___

### AttribProps

Ƭ **AttribProps**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `dim` | `number` |
| `name` | `string` |
| `normalize` | `boolean` |
| `type` | [`AttribType`](README.md#attribtype-1) |

___

### AttribType

Ƭ **AttribType**: [`Abstract`](README.md#abstract)<`number`, ``"AttribType"``\>

___

### AutoGasSetting

Ƭ **AutoGasSetting**: [`Abstract`](README.md#abstract)<`string`, ``"AutoGasSetting"``\>

The user can choose to have the client automatically choose a gas price for their transactions,
depending on how much they are willing to pay and how fast they want their transactions to confirm.

___

### Biome

Ƭ **Biome**: [`Abstract`](README.md#abstract)<`number`, ``"Biome"``\>

Abstract type representing a biome.

___

### CaptureZone

Ƭ **CaptureZone**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `coords` | [`WorldCoords`](README.md#worldcoords) |
| `radius` | `number` |

___

### ClaimedCoords

Ƭ **ClaimedCoords**: [`WorldCoords`](README.md#worldcoords) & { `hash`: [`LocationId`](README.md#locationid) ; `revealer`: [`EthAddress`](README.md#ethaddress) ; `score`: `number`  }

Represents a planet location that has been broadcast on-chain

___

### ClaimedLocation

Ƭ **ClaimedLocation**: [`WorldLocation`](README.md#worldlocation) & { `revealer`: [`EthAddress`](README.md#ethaddress)  }

___

### ContractMethodName

Ƭ **ContractMethodName**: ``"revealLocation"`` \| ``"initializePlayer"`` \| ``"move"`` \| ``"upgradePlanet"`` \| ``"buyHat"`` \| ``"transferPlanet"`` \| ``"findArtifact"`` \| ``"prospectPlanet"`` \| ``"depositArtifact"`` \| ``"withdrawArtifact"`` \| ``"activateArtifact"`` \| ``"deactivateArtifact"`` \| ``"withdrawSilver"`` \| ``"useKey"`` \| ``"adminUseKey"`` \| ``"addKeys"`` \| ``"giveSpaceShips"`` \| ``"createLobby"`` \| ``"invadePlanet"`` \| ``"capturePlanet"``

___

### CursorState

Ƭ **CursorState**: [`Abstract`](README.md#abstract)<`string`, ``"CursorState"``\>

___

### DrawMode

Ƭ **DrawMode**: [`Abstract`](README.md#abstract)<`number`, ``"DrawMode"``\>

___

### EthAddress

Ƭ **EthAddress**: [`Abstract`](README.md#abstract)<`string`, ``"EthAddress"``\>

This is expected to be a 40-character, lowercase hex string, prefixed with 0x
(so 42 characters in total). EthAddress should only ever be instantiated
through the `address` function in `serde`.

___

### EthTxStatus

Ƭ **EthTxStatus**: ``"Init"`` \| ``"Processing"`` \| ``"Prioritized"`` \| ``"Submit"`` \| ``"Confirm"`` \| ``"Fail"`` \| ``"Cancel"``

___

### HSLVec

Ƭ **HSLVec**: readonly [`number`, `number`, `number`]

___

### HatType

Ƭ **HatType**: [`Abstract`](README.md#abstract)<`string`, ``"HatType"``\>

___

### LocatablePlanet

Ƭ **LocatablePlanet**: [`Planet`](README.md#planet) & { `biome`: [`Biome`](README.md#biome-1) ; `location`: [`WorldLocation`](README.md#worldlocation)  }

A planet whose coordinates are known to the client.

___

### LocationId

Ƭ **LocationId**: [`Abstract`](README.md#abstract)<`string`, ``"LocationId"``\>

a unique identifier for a location in the universe (corresponding to some
underlying coordinates (x, y)). This is a 64-character lowercase hex string
not prefixed with 0x. LocationIDs should only be instantiated through
`locationIdFromHexStr`, `locationIdFromDecStr`, `locationIdFromBigInt`, and
`locationIdFromEthersBN` in `serde`.

___

### ModalId

Ƭ **ModalId**: [`ModalName`](README.md#modalname-1) \| [`PluginId`](README.md#pluginid)

Modals can either be built into the game, or spawned by a plugin.

___

### ModalManagerEvent

Ƭ **ModalManagerEvent**: [`Abstract`](README.md#abstract)<`string`, ``"ModalManagerEvent"``\>

___

### ModalName

Ƭ **ModalName**: [`Abstract`](README.md#abstract)<`string`, ``"ModalName"``\>

Modals built into the game have a human-readable name.

___

### ModalPositions

Ƭ **ModalPositions**: `Map`<[`ModalId`](README.md#modalid), [`ModalPosition`](interfaces/ModalPosition.md)\>

___

### NFTMetadata

Ƭ **NFTMetadata**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | `NFTAttribute`[] |
| `description` | `string` |
| `image` | `string` |
| `name` | `string` |

___

### NetworkHealthSummary

Ƭ **NetworkHealthSummary**: [[`AutoGasSetting`](README.md#autogassetting-1), `number`][]

On the server we keep track of how fast each auto gas setting confirms in practice.

___

### Planet

Ƭ **Planet**: `Object`

Represents a Dark Forest planet object (planets, asteroid fields, quasars,
spacetime rips, and foundries). Note that some `Planet` fields (1) store
client-specific data that the blockchain is not aware of, such as
`unconfirmedDepartures` (tracks pending moves originating at this planet that
have been submitted to the blockchain from a client), or (2) store derived
data that is calculated separately client-side, such as `silverSpent` and
`bonus`. So this object does not cleanly map to any single object in the
DarkForest contract (or even any collection of objects).

#### Type declaration

| Name | Type |
| :------ | :------ |
| `bonus` | [`PlanetBonus`](README.md#planetbonus) |
| `capturer?` | [`EthAddress`](README.md#ethaddress) |
| `claimer?` | [`EthAddress`](README.md#ethaddress) |
| `coordsRevealed` | `boolean` |
| `defense` | `number` |
| `destroyed` | `boolean` |
| `emojiBobAnimation?` | [`DFAnimation`](classes/DFAnimation.md) |
| `emojiZoopAnimation?` | [`DFAnimation`](classes/DFAnimation.md) |
| `emojiZoopOutAnimation?` | [`DFStatefulAnimation`](classes/DFStatefulAnimation.md)<`string`\> |
| `energy` | `number` |
| `energyCap` | `number` |
| `energyGrowth` | `number` |
| `hasTriedFindingArtifact` | `boolean` |
| `hatLevel` | `number` |
| `heldArtifactIds` | [`ArtifactId`](README.md#artifactid)[] |
| `invadeStartBlock?` | `number` |
| `invader?` | [`EthAddress`](README.md#ethaddress) |
| `isHomePlanet` | `boolean` |
| `isInContract` | `boolean` |
| `lastLoadedServerState?` | `number` |
| `lastUpdated` | `number` |
| `loadingServerState` | `boolean` |
| `localPhotoidUpgrade?` | [`Upgrade`](README.md#upgrade) |
| `locationId` | [`LocationId`](README.md#locationid) |
| `messages?` | [`PlanetMessage`](interfaces/PlanetMessage.md)<`unknown`\>[] |
| `needsServerRefresh` | `boolean` |
| `owner` | [`EthAddress`](README.md#ethaddress) |
| `pausers` | `number` |
| `perlin` | `number` |
| `planetLevel` | [`PlanetLevel`](README.md#planetlevel-1) |
| `planetType` | [`PlanetType`](README.md#planettype-1) |
| `prospectedBlockNumber?` | `number` |
| `range` | `number` |
| `revealer?` | [`EthAddress`](README.md#ethaddress) |
| `silver` | `number` |
| `silverCap` | `number` |
| `silverGrowth` | `number` |
| `silverSpent` | `number` |
| `spaceJunk` | `number` |
| `spaceType` | [`SpaceType`](README.md#spacetype-1) |
| `speed` | `number` |
| `syncedWithContract` | `boolean` |
| `transactions?` | [`TransactionCollection`](interfaces/TransactionCollection.md) |
| `unconfirmedAddEmoji` | `boolean` |
| `unconfirmedClearEmoji` | `boolean` |
| `upgradeState` | [`UpgradeState`](README.md#upgradestate) |

___

### PlanetBonus

Ƭ **PlanetBonus**: [`boolean`, `boolean`, `boolean`, `boolean`, `boolean`, `boolean`]

A list of five flags, indicating whether the planet has an attached comet
doubling each of five stats: (in order) [energyCap, energyGrowth, range,
speed, defense]

___

### PlanetLevel

Ƭ **PlanetLevel**: [`Abstract`](README.md#abstract)<`number`, ``"PlanetLevel"``\>

Abstract type representing a planet level.

___

### PlanetMessageBody

Ƭ **PlanetMessageBody**: [`EmojiFlagBody`](interfaces/EmojiFlagBody.md) \| `unknown`

Thinking about future message types.

___

### PlanetMessageType

Ƭ **PlanetMessageType**: [`Abstract`](README.md#abstract)<`string`, ``"PlanetMessageType"``\>

Abstract type representing a type of planet message.

___

### PlanetType

Ƭ **PlanetType**: [`Abstract`](README.md#abstract)<`number`, ``"PlanetType"``\>

Abstract type representing a planet type.

___

### Player

Ƭ **Player**: `Object`

Represents a player; corresponds fairly closely with the analogous contract
struct

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | [`EthAddress`](README.md#ethaddress) | - |
| `claimedShips` | `boolean` | - |
| `homePlanetId` | [`LocationId`](README.md#locationid) | - |
| `initTimestamp` | `number` | seconds (not millis) |
| `lastClaimTimestamp` | `number` | - |
| `lastRevealTimestamp` | `number` | seconds (not millis) |
| `score` | `number` | - |
| `spaceJunk` | `number` | - |
| `spaceJunkLimit` | `number` | - |
| `twitter?` | `string` | - |

___

### PluginId

Ƭ **PluginId**: [`Abstract`](README.md#abstract)<`string`, ``"PluginId"``\>

___

### RGBAVec

Ƭ **RGBAVec**: [`number`, `number`, `number`, `number`]

___

### RGBVec

Ƭ **RGBVec**: [`number`, `number`, `number`]

___

### RegisterResponse

Ƭ **RegisterResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `error?` | `string` |
| `inProgress` | `boolean` |
| `success?` | `boolean` |

___

### RenderZIndex

Ƭ **RenderZIndex**: [`Abstract`](README.md#abstract)<`number`, ``"RenderZIndex"``\>

___

### RendererProgram

Ƭ **RendererProgram**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attribs` | { `[key: string]`: [`AttribProps`](README.md#attribprops);  } |
| `fragmentShader` | `string` |
| `uniforms` | { `[key: string]`: [`UniformProps`](README.md#uniformprops);  } |
| `vertexShader` | `string` |

___

### RendererType

Ƭ **RendererType**: [`Abstract`](README.md#abstract)<`number`, ``"RendererType"``\>

Enum for determining the type of renderer
Each renderer should contain a variable called 'rendererType'
'rendererType' should be a enum that corresponds with the type of renderer it is

___

### RevealedCoords

Ƭ **RevealedCoords**: [`WorldCoords`](README.md#worldcoords) & { `hash`: [`LocationId`](README.md#locationid) ; `revealer`: [`EthAddress`](README.md#ethaddress)  }

Represents a planet location that has been broadcast on-chain

___

### RevealedLocation

Ƭ **RevealedLocation**: [`WorldLocation`](README.md#worldlocation) & { `revealer`: [`EthAddress`](README.md#ethaddress)  }

___

### RuinsInfo

Ƭ **RuinsInfo**: `Object`

#### Index signature

▪ [PlanetLevel: `number`]: { `props`: [`number`, `number`, `number`, `number`] ; `weights`: [`number`, `number`, `number`, `number`]  }

___

### Scaling

Ƭ **Scaling**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

___

### Setting

Ƭ **Setting**: [`Abstract`](README.md#abstract)<`string`, ``"Setting"``\>

___

### SpaceColorConfiguration

Ƭ **SpaceColorConfiguration**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `deadSpaceColor?` | `string` |
| `deepSpaceColor?` | `string` |
| `innerNebulaColor?` | `string` |
| `nebulaColor?` | `string` |
| `spaceColor?` | `string` |

___

### SpaceType

Ƭ **SpaceType**: [`Abstract`](README.md#abstract)<`number`, ``"SpaceType"``\>

Abstract type representing a type of space.

___

### TextAlign

Ƭ **TextAlign**: [`Abstract`](README.md#abstract)<`number`, ``"TextAlign"``\>

___

### TextAnchor

Ƭ **TextAnchor**: [`Abstract`](README.md#abstract)<`number`, ``"TextAnchor"``\>

___

### TooltipName

Ƭ **TooltipName**: [`Abstract`](README.md#abstract)<`string`, ``"TooltipName"``\>

___

### TransactionId

Ƭ **TransactionId**: `number`

A unique incrementing number that identifies a transaction.

___

### Translation

Ƭ **Translation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

___

### UniformJSType

Ƭ **UniformJSType**: `mat4` \| `mat3` \| `number` \| [`Vec3`](README.md#vec3)

___

### UniformProps

Ƭ **UniformProps**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `type` | [`UniformType`](README.md#uniformtype-1) |

___

### UniformType

Ƭ **UniformType**: [`Abstract`](README.md#abstract)<`number`, ``"UniformType"``\>

___

### Upgrade

Ƭ **Upgrade**: `Object`

The effects of an upgrade on the stats of a planet. Both upgrades purchased
for silver as well as artifacts of certain types can modify stats of a
planet.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `defMultiplier` | `number` |
| `energyCapMultiplier` | `number` |
| `energyGroMultiplier` | `number` |
| `rangeMultiplier` | `number` |
| `speedMultiplier` | `number` |

___

### UpgradeBranchName

Ƭ **UpgradeBranchName**: [`Abstract`](README.md#abstract)<`number`, ``"UpgradeBranchName"``\>

Abstract type representing an upgrade branch.

___

### UpgradeBranches

Ƭ **UpgradeBranches**: [[`UpgradeLevels`](README.md#upgradelevels), [`UpgradeLevels`](README.md#upgradelevels), [`UpgradeLevels`](README.md#upgradelevels)]

Stores the stat effects of upgrades of all three branches: defense, range,
speed.

___

### UpgradeLevels

Ƭ **UpgradeLevels**: [[`Upgrade`](README.md#upgrade), [`Upgrade`](README.md#upgrade), [`Upgrade`](README.md#upgrade), [`Upgrade`](README.md#upgrade)]

On a single upgrade branch, the stat effects of the four upgrades.

___

### UpgradeState

Ƭ **UpgradeState**: [`number`, `number`, `number`]

How many times a planet has been upgraded along each of the three branches:
defense, range, and speed

___

### Vec3

Ƭ **Vec3**: [`number`, `number`, `number`]

___

### VoyageId

Ƭ **VoyageId**: [`Abstract`](README.md#abstract)<`string`, ``"VoyageId"``\>

a voyage UID. these start at 1 and auto-increment in the contract. this is
immutable and the only place a VoyageId should ever be created is on
initial deserialization of a QueuedArrival from contract data (see `serde`)

___

### WhitelistStatusResponse

Ƭ **WhitelistStatusResponse**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `failedAt?` | `string` | Failure timestamp. |
| `position?` | `string` | The address' position in the queue. |
| `txHash?` | `string` | If successful, the hash of the whitelist registration transaction. |
| `whitelisted` | `boolean` | - |

___

### WorldCoords

Ƭ **WorldCoords**: `Object`

Represents the coordinates of a location in the world.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

___

### WorldLocation

Ƭ **WorldLocation**: `Object`

A location in the world with relevant properties: the location's ID
(deterministically generated from its coords), the spacetype perlin value at
these coordinates, and the biomebase perlin value at these coordinates
(combined with spacetype to derive the biome here)

#### Type declaration

| Name | Type |
| :------ | :------ |
| `biomebase` | `number` |
| `coords` | [`WorldCoords`](README.md#worldcoords) |
| `hash` | [`LocationId`](README.md#locationid) |
| `perlin` | `number` |

___

### Wormhole

Ƭ **Wormhole**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `from` | [`LocationId`](README.md#locationid) |
| `to` | [`LocationId`](README.md#locationid) |

___

## Type Type Aliases

### Abstract

Ƭ **Abstract**<`Type`, `Token`\>: `Type` & `Tagged`<`Token`\>

Create an opaque type, which hides its internal details from the public, and can only be created by being used explicitly.

The generic type parameter can be anything. It doesn't have to be an object.

[Read more about opaque types.](https://codemix.com/opaque-types-in-javascript/)

There have been several discussions about adding this feature to TypeScript via the `opaque type` operator, similar to how Flow does it. Unfortunately, nothing has (yet) moved forward:
	- [Microsoft/TypeScript#202](https://github.com/microsoft/TypeScript/issues/202)
	- [Microsoft/TypeScript#15408](https://github.com/Microsoft/TypeScript/issues/15408)
	- [Microsoft/TypeScript#15807](https://github.com/Microsoft/TypeScript/issues/15807)

**`Example`**

```
import type {Opaque} from 'type-fest';

type AccountNumber = Opaque<number, 'AccountNumber'>;
type AccountBalance = Opaque<number, 'AccountBalance'>;

// The `Token` parameter allows the compiler to differentiate between types, whereas "unknown" will not. For example, consider the following structures:
type ThingOne = Opaque<string>;
type ThingTwo = Opaque<string>;

// To the compiler, these types are allowed to be cast to each other as they have the same underlying type. They are both `string & { __opaque__: unknown }`.
// To avoid this behaviour, you would instead pass the "Token" parameter, like so.
type NewThingOne = Opaque<string, 'ThingOne'>;
type NewThingTwo = Opaque<string, 'ThingTwo'>;

// Now they're completely separate types, so the following will fail to compile.
function createNewThingOne (): NewThingOne {
	// As you can see, casting from a string is still allowed. However, you may not cast NewThingOne to NewThingTwo, and vice versa.
	return 'new thing one' as NewThingOne;
}

// This will fail to compile, as they are fundamentally different types.
const thingTwo = createNewThingOne() as NewThingTwo;

// Here's another example of opaque typing.
function createAccountNumber(): AccountNumber {
	return 2 as AccountNumber;
}

function getMoneyForAccount(accountNumber: AccountNumber): AccountBalance {
	return 4 as AccountBalance;
}

// This will compile successfully.
getMoneyForAccount(createAccountNumber());

// But this won't, because it has to be explicitly passed as an `AccountNumber` type.
getMoneyForAccount(2);

// You can use opaque values like they aren't opaque too.
const accountNumber = createAccountNumber();

// This will not compile successfully.
const newAccountNumber = accountNumber + 2;

// As a side note, you can (and should) use recursive types for your opaque types to make them stronger and hopefully easier to type.
type Person = {
	id: Opaque<number, Person>;
	name: string;
};
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | `Type` |
| `Token` | `unknown` |

## Variables

### ArrivalType

• **ArrivalType**: `Object`

Enumeration of arrival types.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Normal` | [`ArrivalType`](README.md#arrivaltype-1) |
| `Photoid` | [`ArrivalType`](README.md#arrivaltype-1) |
| `Unknown` | [`ArrivalType`](README.md#arrivaltype-1) |
| `Wormhole` | [`ArrivalType`](README.md#arrivaltype-1) |

___

### ArtifactRarity

• **ArtifactRarity**: `Object`

Enumeration of artifact rarity levels. Common = 1, Mythic = 5

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Common` | [`ArtifactRarity`](README.md#artifactrarity-1) |
| `Epic` | [`ArtifactRarity`](README.md#artifactrarity-1) |
| `Legendary` | [`ArtifactRarity`](README.md#artifactrarity-1) |
| `Mythic` | [`ArtifactRarity`](README.md#artifactrarity-1) |
| `Rare` | [`ArtifactRarity`](README.md#artifactrarity-1) |
| `Unknown` | [`ArtifactRarity`](README.md#artifactrarity-1) |

___

### ArtifactRarityNames

• `Const` **ArtifactRarityNames**: `Object`

Mapping from ArtifactRarity to pretty-printed names.

___

### ArtifactType

• **ArtifactType**: `Object`

Enumeration of artifact types.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `BlackDomain` | [`ArtifactType`](README.md#artifacttype-1) |
| `BloomFilter` | [`ArtifactType`](README.md#artifacttype-1) |
| `Colossus` | [`ArtifactType`](README.md#artifacttype-1) |
| `Monolith` | [`ArtifactType`](README.md#artifacttype-1) |
| `PhotoidCannon` | [`ArtifactType`](README.md#artifacttype-1) |
| `PlanetaryShield` | [`ArtifactType`](README.md#artifacttype-1) |
| `Pyramid` | [`ArtifactType`](README.md#artifacttype-1) |
| `ShipCrescent` | [`ArtifactType`](README.md#artifacttype-1) |
| `ShipGear` | [`ArtifactType`](README.md#artifacttype-1) |
| `ShipMothership` | [`ArtifactType`](README.md#artifacttype-1) |
| `ShipTitan` | [`ArtifactType`](README.md#artifacttype-1) |
| `ShipWhale` | [`ArtifactType`](README.md#artifacttype-1) |
| `Spaceship` | [`ArtifactType`](README.md#artifacttype-1) |
| `Unknown` | [`ArtifactType`](README.md#artifacttype-1) |
| `Wormhole` | [`ArtifactType`](README.md#artifacttype-1) |

___

### ArtifactTypeNames

• `Const` **ArtifactTypeNames**: `Object`

Mapping from ArtifactType to pretty-printed names.

___

### AttribType

• **AttribType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Float` | [`AttribType`](README.md#attribtype-1) |
| `UByte` | [`AttribType`](README.md#attribtype-1) |

___

### AutoGasSetting

• **AutoGasSetting**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Average` | [`AutoGasSetting`](README.md#autogassetting-1) |
| `Fast` | [`AutoGasSetting`](README.md#autogassetting-1) |
| `Slow` | [`AutoGasSetting`](README.md#autogassetting-1) |

___

### Biome

• **Biome**: `Object`

Enumeration of the biomes in the game. OCEAN = 1, CORRUPTED = 10

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CORRUPTED` | [`Biome`](README.md#biome-1) |
| `DESERT` | [`Biome`](README.md#biome-1) |
| `FOREST` | [`Biome`](README.md#biome-1) |
| `GRASSLAND` | [`Biome`](README.md#biome-1) |
| `ICE` | [`Biome`](README.md#biome-1) |
| `LAVA` | [`Biome`](README.md#biome-1) |
| `OCEAN` | [`Biome`](README.md#biome-1) |
| `SWAMP` | [`Biome`](README.md#biome-1) |
| `TUNDRA` | [`Biome`](README.md#biome-1) |
| `UNKNOWN` | [`Biome`](README.md#biome-1) |
| `WASTELAND` | [`Biome`](README.md#biome-1) |

___

### BiomeNames

• `Const` **BiomeNames**: `Object`

Mapping from Biome to pretty-printed names.

___

### CursorState

• **CursorState**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Normal` | [`CursorState`](README.md#cursorstate-1) |
| `TargetingExplorer` | [`CursorState`](README.md#cursorstate-1) |
| `TargetingForces` | [`CursorState`](README.md#cursorstate-1) |

___

### DrawMode

• **DrawMode**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Lines` | [`DrawMode`](README.md#drawmode-1) |
| `Points` | [`DrawMode`](README.md#drawmode-1) |
| `Triangles` | [`DrawMode`](README.md#drawmode-1) |

___

### HatType

• **HatType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ChefHat` | [`HatType`](README.md#hattype-1) |
| `CowboyHat` | [`HatType`](README.md#hattype-1) |
| `Fez` | [`HatType`](README.md#hattype-1) |
| `Fish` | [`HatType`](README.md#hattype-1) |
| `GraduationCap` | [`HatType`](README.md#hattype-1) |
| `PartyHat` | [`HatType`](README.md#hattype-1) |
| `PopeHat` | [`HatType`](README.md#hattype-1) |
| `SantaHat` | [`HatType`](README.md#hattype-1) |
| `Squid` | [`HatType`](README.md#hattype-1) |
| `TopHat` | [`HatType`](README.md#hattype-1) |

___

### ModalManagerEvent

• **ModalManagerEvent**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `MiningCoordsUpdate` | `string` |
| `StateChanged` | `string` |

___

### ModalName

• **ModalName**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ArtifactConversation` | [`ModalName`](README.md#modalname-1) |
| `ArtifactDetails` | [`ModalName`](README.md#modalname-1) |
| `Broadcast` | [`ModalName`](README.md#modalname-1) |
| `Diagnostics` | [`ModalName`](README.md#modalname-1) |
| `Hats` | [`ModalName`](README.md#modalname-1) |
| `Help` | [`ModalName`](README.md#modalname-1) |
| `Leaderboard` | [`ModalName`](README.md#modalname-1) |
| `ManageAccount` | [`ModalName`](README.md#modalname-1) |
| `ManageArtifacts` | [`ModalName`](README.md#modalname-1) |
| `MapShare` | [`ModalName`](README.md#modalname-1) |
| `Onboarding` | [`ModalName`](README.md#modalname-1) |
| `PlanetContextPane` | [`ModalName`](README.md#modalname-1) |
| `PlanetDetails` | [`ModalName`](README.md#modalname-1) |
| `PlanetDex` | [`ModalName`](README.md#modalname-1) |
| `PluginEditor` | [`ModalName`](README.md#modalname-1) |
| `PluginWarning` | [`ModalName`](README.md#modalname-1) |
| `Plugins` | [`ModalName`](README.md#modalname-1) |
| `Private` | [`ModalName`](README.md#modalname-1) |
| `Settings` | [`ModalName`](README.md#modalname-1) |
| `TransactionLog` | [`ModalName`](README.md#modalname-1) |
| `TwitterVerify` | [`ModalName`](README.md#modalname-1) |
| `UpgradeDetails` | [`ModalName`](README.md#modalname-1) |
| `WithdrawSilver` | [`ModalName`](README.md#modalname-1) |
| `YourArtifacts` | [`ModalName`](README.md#modalname-1) |

___

### PlanetLevel

• **PlanetLevel**: `Object`

Enumeration of the possible planet levels.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `EIGHT` | [`PlanetLevel`](README.md#planetlevel-1) |
| `FIVE` | [`PlanetLevel`](README.md#planetlevel-1) |
| `FOUR` | [`PlanetLevel`](README.md#planetlevel-1) |
| `NINE` | [`PlanetLevel`](README.md#planetlevel-1) |
| `ONE` | [`PlanetLevel`](README.md#planetlevel-1) |
| `SEVEN` | [`PlanetLevel`](README.md#planetlevel-1) |
| `SIX` | [`PlanetLevel`](README.md#planetlevel-1) |
| `THREE` | [`PlanetLevel`](README.md#planetlevel-1) |
| `TWO` | [`PlanetLevel`](README.md#planetlevel-1) |
| `ZERO` | [`PlanetLevel`](README.md#planetlevel-1) |

___

### PlanetLevelNames

• `Const` **PlanetLevelNames**: `Object`

Mapping from PlanetLevel to pretty-printed names.

___

### PlanetMessageType

• **PlanetMessageType**: `Object`

Each message type has a corresponding entry here.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `EmojiFlag` | [`PlanetMessageType`](README.md#planetmessagetype-1) |

___

### PlanetType

• **PlanetType**: `Object`

Enumeration of the planet types. (PLANET = 0, SILVER_BANK = 4)

#### Type declaration

| Name | Type |
| :------ | :------ |
| `PLANET` | [`PlanetType`](README.md#planettype-1) |
| `RUINS` | [`PlanetType`](README.md#planettype-1) |
| `SILVER_BANK` | [`PlanetType`](README.md#planettype-1) |
| `SILVER_MINE` | [`PlanetType`](README.md#planettype-1) |
| `TRADING_POST` | [`PlanetType`](README.md#planettype-1) |

___

### PlanetTypeNames

• `Const` **PlanetTypeNames**: `Object`

Mapping from PlanetType to pretty-printed names.

___

### RenderZIndex

• **RenderZIndex**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Background` | [`RenderZIndex`](README.md#renderzindex-1) |
| `DEFAULT` | [`RenderZIndex`](README.md#renderzindex-1) |
| `MAX` | [`RenderZIndex`](README.md#renderzindex-1) |
| `Planets` | [`RenderZIndex`](README.md#renderzindex-1) |
| `Text` | [`RenderZIndex`](README.md#renderzindex-1) |
| `UI` | [`RenderZIndex`](README.md#renderzindex-1) |
| `Voyages` | [`RenderZIndex`](README.md#renderzindex-1) |

___

### RendererType

• **RendererType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Asteroid` | [`RendererType`](README.md#renderertype-1) |
| `Background` | [`RendererType`](README.md#renderertype-1) |
| `Belt` | [`RendererType`](README.md#renderertype-1) |
| `BlackDomain` | [`RendererType`](README.md#renderertype-1) |
| `CaptureZone` | [`RendererType`](README.md#renderertype-1) |
| `Circle` | [`RendererType`](README.md#renderertype-1) |
| `Line` | [`RendererType`](README.md#renderertype-1) |
| `Mine` | [`RendererType`](README.md#renderertype-1) |
| `MineBody` | [`RendererType`](README.md#renderertype-1) |
| `Perlin` | [`RendererType`](README.md#renderertype-1) |
| `Planet` | [`RendererType`](README.md#renderertype-1) |
| `PlanetManager` | [`RendererType`](README.md#renderertype-1) |
| `Quasar` | [`RendererType`](README.md#renderertype-1) |
| `QuasarBody` | [`RendererType`](README.md#renderertype-1) |
| `QuasarRay` | [`RendererType`](README.md#renderertype-1) |
| `Rect` | [`RendererType`](README.md#renderertype-1) |
| `Ring` | [`RendererType`](README.md#renderertype-1) |
| `Ruins` | [`RendererType`](README.md#renderertype-1) |
| `Space` | [`RendererType`](README.md#renderertype-1) |
| `SpacetimeRip` | [`RendererType`](README.md#renderertype-1) |
| `Sprite` | [`RendererType`](README.md#renderertype-1) |
| `Text` | [`RendererType`](README.md#renderertype-1) |
| `UI` | [`RendererType`](README.md#renderertype-1) |
| `Unmined` | [`RendererType`](README.md#renderertype-1) |
| `Voyager` | [`RendererType`](README.md#renderertype-1) |
| `Wormhole` | [`RendererType`](README.md#renderertype-1) |

___

### Setting

• **Setting**: `Object`

Each setting has a unique identifier. Each account gets to store its own local storage setting,
per instance of the dark forest contract that it's connected to.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `AutoApproveNonPurchaseTransactions` | [`Setting`](README.md#setting-1) |
| `AutoClearConfirmedTransactionsAfterSeconds` | [`Setting`](README.md#setting-1) |
| `AutoClearRejectedTransactionsAfterSeconds` | [`Setting`](README.md#setting-1) |
| `DisableDefaultShortcuts` | [`Setting`](README.md#setting-1) |
| `DisableEmojiRendering` | [`Setting`](README.md#setting-1) |
| `DisableFancySpaceEffect` | [`Setting`](README.md#setting-1) |
| `DisableHatRendering` | [`Setting`](README.md#setting-1) |
| `DrawChunkBorders` | [`Setting`](README.md#setting-1) |
| `ExperimentalFeatures` | [`Setting`](README.md#setting-1) |
| `ForceReloadEmbeddedPlugins` | [`Setting`](README.md#setting-1) |
| `FoundArtifact` | [`Setting`](README.md#setting-1) |
| `FoundComet` | [`Setting`](README.md#setting-1) |
| `FoundDeepSpace` | [`Setting`](README.md#setting-1) |
| `FoundPirates` | [`Setting`](README.md#setting-1) |
| `FoundSilver` | [`Setting`](README.md#setting-1) |
| `FoundSilverBank` | [`Setting`](README.md#setting-1) |
| `FoundSpace` | [`Setting`](README.md#setting-1) |
| `FoundTradingPost` | [`Setting`](README.md#setting-1) |
| `GasFeeGwei` | [`Setting`](README.md#setting-1) |
| `HasAcceptedPluginRisk` | [`Setting`](README.md#setting-1) |
| `HighPerformanceRendering` | [`Setting`](README.md#setting-1) |
| `IsMining` | [`Setting`](README.md#setting-1) |
| `MiningCores` | [`Setting`](README.md#setting-1) |
| `MoveNotifications` | [`Setting`](README.md#setting-1) |
| `NewPlayer` | [`Setting`](README.md#setting-1) |
| `OptOutMetrics` | [`Setting`](README.md#setting-1) |
| `RendererColorDeadSpace` | [`Setting`](README.md#setting-1) |
| `RendererColorDeepSpace` | [`Setting`](README.md#setting-1) |
| `RendererColorInnerNebula` | [`Setting`](README.md#setting-1) |
| `RendererColorNebula` | [`Setting`](README.md#setting-1) |
| `RendererColorSpace` | [`Setting`](README.md#setting-1) |
| `TerminalVisible` | [`Setting`](README.md#setting-1) |
| `TutorialCompleted` | [`Setting`](README.md#setting-1) |
| `TutorialOpen` | [`Setting`](README.md#setting-1) |

___

### SpaceType

• **SpaceType**: `Object`

Enumeration of the types of space in the game. NEBULA = 0, DEAD_SPACE = 3

#### Type declaration

| Name | Type |
| :------ | :------ |
| `DEAD_SPACE` | [`SpaceType`](README.md#spacetype-1) |
| `DEEP_SPACE` | [`SpaceType`](README.md#spacetype-1) |
| `NEBULA` | [`SpaceType`](README.md#spacetype-1) |
| `SPACE` | [`SpaceType`](README.md#spacetype-1) |

___

### SpaceTypeNames

• `Const` **SpaceTypeNames**: `Object`

Mapping from SpaceType to pretty-printed names.

___

### TextAlign

• **TextAlign**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Center` | [`TextAlign`](README.md#textalign-1) |
| `Left` | [`TextAlign`](README.md#textalign-1) |
| `Right` | [`TextAlign`](README.md#textalign-1) |

___

### TextAnchor

• **TextAnchor**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Bottom` | [`TextAnchor`](README.md#textanchor-1) |
| `Middle` | [`TextAnchor`](README.md#textanchor-1) |
| `Top` | [`TextAnchor`](README.md#textanchor-1) |

___

### TooltipName

• **TooltipName**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `Abandon` | [`TooltipName`](README.md#tooltipname-1) | - |
| `ActivateArtifact` | [`TooltipName`](README.md#tooltipname-1) | - |
| `ArtifactBuff` | [`TooltipName`](README.md#tooltipname-1) | - |
| `ArtifactStored` | [`TooltipName`](README.md#tooltipname-1) | - |
| `Bonus` | [`TooltipName`](README.md#tooltipname-1) | - |
| `BonusDefense` | [`TooltipName`](README.md#tooltipname-1) | - |
| `BonusEnergyCap` | [`TooltipName`](README.md#tooltipname-1) | - |
| `BonusEnergyGro` | [`TooltipName`](README.md#tooltipname-1) | - |
| `BonusRange` | [`TooltipName`](README.md#tooltipname-1) | - |
| `BonusSpaceJunk` | [`TooltipName`](README.md#tooltipname-1) | - |
| `BonusSpeed` | [`TooltipName`](README.md#tooltipname-1) | - |
| `CancelTransaction` | [`TooltipName`](README.md#tooltipname-1) | - |
| `Capturable` | [`TooltipName`](README.md#tooltipname-1) | - |
| `Clowntown` | [`TooltipName`](README.md#tooltipname-1) | - |
| `CurrentMining` | [`TooltipName`](README.md#tooltipname-1) | - |
| `DeactivateArtifact` | [`TooltipName`](README.md#tooltipname-1) | - |
| `Defense` | [`TooltipName`](README.md#tooltipname-1) | - |
| `DefenseMultiplier` | [`TooltipName`](README.md#tooltipname-1) | - |
| `DepositArtifact` | [`TooltipName`](README.md#tooltipname-1) | - |
| `Empty` | [`TooltipName`](README.md#tooltipname-1) | So that you can render a tooltip without anything, and control its contents entirely via the TooltipTriggerProps#extraContent prop field. |
| `Energy` | [`TooltipName`](README.md#tooltipname-1) | - |
| `EnergyCapMultiplier` | [`TooltipName`](README.md#tooltipname-1) | - |
| `EnergyGrowth` | [`TooltipName`](README.md#tooltipname-1) | - |
| `EnergyGrowthMultiplier` | [`TooltipName`](README.md#tooltipname-1) | - |
| `FindArtifact` | [`TooltipName`](README.md#tooltipname-1) | - |
| `HashesPerSec` | [`TooltipName`](README.md#tooltipname-1) | - |
| `HoverPlanet` | [`TooltipName`](README.md#tooltipname-1) | - |
| `Invadable` | [`TooltipName`](README.md#tooltipname-1) | - |
| `MaxLevel` | [`TooltipName`](README.md#tooltipname-1) | - |
| `MinEnergy` | [`TooltipName`](README.md#tooltipname-1) | - |
| `MiningPause` | [`TooltipName`](README.md#tooltipname-1) | - |
| `MiningTarget` | [`TooltipName`](README.md#tooltipname-1) | - |
| `ModalFindArtifact` | [`TooltipName`](README.md#tooltipname-1) | - |
| `ModalHats` | [`TooltipName`](README.md#tooltipname-1) | - |
| `ModalHelp` | [`TooltipName`](README.md#tooltipname-1) | - |
| `ModalLeaderboard` | [`TooltipName`](README.md#tooltipname-1) | - |
| `ModalPlanetDetails` | [`TooltipName`](README.md#tooltipname-1) | - |
| `ModalPlanetDex` | [`TooltipName`](README.md#tooltipname-1) | - |
| `ModalPlugins` | [`TooltipName`](README.md#tooltipname-1) | - |
| `ModalSettings` | [`TooltipName`](README.md#tooltipname-1) | - |
| `ModalTwitterBroadcast` | [`TooltipName`](README.md#tooltipname-1) | - |
| `ModalTwitterVerification` | [`TooltipName`](README.md#tooltipname-1) | - |
| `ModalUpgradeDetails` | [`TooltipName`](README.md#tooltipname-1) | - |
| `ModalWithdrawSilver` | [`TooltipName`](README.md#tooltipname-1) | - |
| `ModalYourArtifacts` | [`TooltipName`](README.md#tooltipname-1) | - |
| `NetworkHealth` | [`TooltipName`](README.md#tooltipname-1) | - |
| `Pirates` | [`TooltipName`](README.md#tooltipname-1) | - |
| `PlanetRank` | [`TooltipName`](README.md#tooltipname-1) | - |
| `PrioritizeTransaction` | [`TooltipName`](README.md#tooltipname-1) | - |
| `Range` | [`TooltipName`](README.md#tooltipname-1) | - |
| `RangeMultiplier` | [`TooltipName`](README.md#tooltipname-1) | - |
| `Rank` | [`TooltipName`](README.md#tooltipname-1) | - |
| `RetryTransaction` | [`TooltipName`](README.md#tooltipname-1) | - |
| `Score` | [`TooltipName`](README.md#tooltipname-1) | - |
| `SelectedSilver` | [`TooltipName`](README.md#tooltipname-1) | - |
| `Silver` | [`TooltipName`](README.md#tooltipname-1) | - |
| `SilverCap` | [`TooltipName`](README.md#tooltipname-1) | - |
| `SilverGrowth` | [`TooltipName`](README.md#tooltipname-1) | - |
| `SilverProd` | [`TooltipName`](README.md#tooltipname-1) | - |
| `SpaceJunk` | [`TooltipName`](README.md#tooltipname-1) | - |
| `Speed` | [`TooltipName`](README.md#tooltipname-1) | - |
| `SpeedMultiplier` | [`TooltipName`](README.md#tooltipname-1) | - |
| `Time50` | [`TooltipName`](README.md#tooltipname-1) | - |
| `Time90` | [`TooltipName`](README.md#tooltipname-1) | - |
| `TimeUntilActivationPossible` | [`TooltipName`](README.md#tooltipname-1) | - |
| `TwitterHandle` | [`TooltipName`](README.md#tooltipname-1) | - |
| `Upgrades` | [`TooltipName`](README.md#tooltipname-1) | - |
| `WithdrawArtifact` | [`TooltipName`](README.md#tooltipname-1) | - |
| `WithdrawSilverButton` | [`TooltipName`](README.md#tooltipname-1) | - |

___

### UniformType

• **UniformType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Float` | [`UniformType`](README.md#uniformtype-1) |
| `Mat3` | [`UniformType`](README.md#uniformtype-1) |
| `Mat4` | [`UniformType`](README.md#uniformtype-1) |
| `Texture` | [`UniformType`](README.md#uniformtype-1) |
| `UByte` | [`UniformType`](README.md#uniformtype-1) |
| `Vec3` | [`UniformType`](README.md#uniformtype-1) |

___

### UpgradeBranchName

• **UpgradeBranchName**: `Object`

Enumeration of the three upgrade branches.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Defense` | [`UpgradeBranchName`](README.md#upgradebranchname-1) |
| `Range` | [`UpgradeBranchName`](README.md#upgradebranchname-1) |
| `Speed` | [`UpgradeBranchName`](README.md#upgradebranchname-1) |

## Functions

### artifactNameFromArtifact

▸ **artifactNameFromArtifact**(`artifact`): `string`

Deterministically generates the name of the artifact from its ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `artifact` | [`Artifact`](README.md#artifact) | The artifact to generate a name for |

#### Returns

`string`
