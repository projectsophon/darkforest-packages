# Interface: RendererGameContext

## Hierarchy

- `DiagnosticUpdater`

  ↳ **`RendererGameContext`**

## Table of contents

### Properties

- [updateDiagnostics](RendererGameContext.md#updatediagnostics)

### Methods

- [drawAllRunningPlugins](RendererGameContext.md#drawallrunningplugins)
- [getAbandonRangeChangePercent](RendererGameContext.md#getabandonrangechangepercent)
- [getAccount](RendererGameContext.md#getaccount)
- [getAllMinerLocations](RendererGameContext.md#getallminerlocations)
- [getAllVoyages](RendererGameContext.md#getallvoyages)
- [getArtifactSending](RendererGameContext.md#getartifactsending)
- [getArtifactWithId](RendererGameContext.md#getartifactwithid)
- [getArtifactsWithIds](RendererGameContext.md#getartifactswithids)
- [getBooleanSetting](RendererGameContext.md#getbooleansetting)
- [getCaptureZones](RendererGameContext.md#getcapturezones)
- [getDistCoords](RendererGameContext.md#getdistcoords)
- [getEnergyArrivingForMove](RendererGameContext.md#getenergyarrivingformove)
- [getForcesSending](RendererGameContext.md#getforcessending)
- [getHoveringOverCoords](RendererGameContext.md#gethoveringovercoords)
- [getHoveringOverPlanet](RendererGameContext.md#gethoveringoverplanet)
- [getIsChoosingTargetPlanet](RendererGameContext.md#getischoosingtargetplanet)
- [getIsHighPerfMode](RendererGameContext.md#getishighperfmode)
- [getLocationOfPlanet](RendererGameContext.md#getlocationofplanet)
- [getLocationsAndChunks](RendererGameContext.md#getlocationsandchunks)
- [getMouseDownPlanet](RendererGameContext.md#getmousedownplanet)
- [getPerlinConfig](RendererGameContext.md#getperlinconfig)
- [getPerlinThresholds](RendererGameContext.md#getperlinthresholds)
- [getPlanetWithCoords](RendererGameContext.md#getplanetwithcoords)
- [getPlanetWithId](RendererGameContext.md#getplanetwithid)
- [getPlayer](RendererGameContext.md#getplayer)
- [getRadiusOfPlanetLevel](RendererGameContext.md#getradiusofplanetlevel)
- [getSelectedCoords](RendererGameContext.md#getselectedcoords)
- [getSelectedPlanet](RendererGameContext.md#getselectedplanet)
- [getSpaceTypePerlin](RendererGameContext.md#getspacetypeperlin)
- [getStringSetting](RendererGameContext.md#getstringsetting)
- [getUnconfirmedMoves](RendererGameContext.md#getunconfirmedmoves)
- [getUnconfirmedWormholeActivations](RendererGameContext.md#getunconfirmedwormholeactivations)
- [getWorldRadius](RendererGameContext.md#getworldradius)
- [getWormholes](RendererGameContext.md#getwormholes)
- [isAbandoning](RendererGameContext.md#isabandoning)
- [isOverOwnPlanet](RendererGameContext.md#isoverownplanet)
- [isOwnedByMe](RendererGameContext.md#isownedbyme)
- [isSendingShip](RendererGameContext.md#issendingship)
- [spaceTypeFromPerlin](RendererGameContext.md#spacetypefromperlin)

## Properties

### updateDiagnostics

• **updateDiagnostics**: (`updateFn`: (`d`: `Diagnostics`) => `void`) => `void`

#### Type declaration

▸ (`updateFn`): `void`

Updates the diagnostics using the provided updater function.

##### Parameters

| Name | Type |
| :------ | :------ |
| `updateFn` | (`d`: `Diagnostics`) => `void` |

##### Returns

`void`

#### Inherited from

DiagnosticUpdater.updateDiagnostics

## Methods

### drawAllRunningPlugins

▸ **drawAllRunningPlugins**(`ctx`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` |

#### Returns

`void`

___

### getAbandonRangeChangePercent

▸ **getAbandonRangeChangePercent**(): `number`

#### Returns

`number`

___

### getAccount

▸ **getAccount**(): `undefined` \| `EthAddress`

#### Returns

`undefined` \| `EthAddress`

___

### getAllMinerLocations

▸ **getAllMinerLocations**(): `WorldCoords`[]

#### Returns

`WorldCoords`[]

___

### getAllVoyages

▸ **getAllVoyages**(): `QueuedArrival`[]

#### Returns

`QueuedArrival`[]

___

### getArtifactSending

▸ **getArtifactSending**(`planetId`): `undefined` \| `Artifact`

#### Parameters

| Name | Type |
| :------ | :------ |
| `planetId` | `LocationId` |

#### Returns

`undefined` \| `Artifact`

___

### getArtifactWithId

▸ **getArtifactWithId**(`artifactId`): `undefined` \| `Artifact`

#### Parameters

| Name | Type |
| :------ | :------ |
| `artifactId` | `undefined` \| `ArtifactId` |

#### Returns

`undefined` \| `Artifact`

___

### getArtifactsWithIds

▸ **getArtifactsWithIds**(`artifactIds`): (`undefined` \| `Artifact`)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `artifactIds` | `ArtifactId`[] |

#### Returns

(`undefined` \| `Artifact`)[]

___

### getBooleanSetting

▸ **getBooleanSetting**(`setting`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `setting` | `Setting` |

#### Returns

`boolean`

___

### getCaptureZones

▸ **getCaptureZones**(): `Iterable`<`CaptureZone`\>

#### Returns

`Iterable`<`CaptureZone`\>

___

### getDistCoords

▸ **getDistCoords**(`from`, `to`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `WorldCoords` |
| `to` | `WorldCoords` |

#### Returns

`number`

___

### getEnergyArrivingForMove

▸ **getEnergyArrivingForMove**(`from`, `to`, `dist`, `energy`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `LocationId` |
| `to` | `undefined` \| `LocationId` |
| `dist` | `undefined` \| `number` |
| `energy` | `number` |

#### Returns

`number`

___

### getForcesSending

▸ **getForcesSending**(`planetId`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `planetId` | `LocationId` |

#### Returns

`number`

___

### getHoveringOverCoords

▸ **getHoveringOverCoords**(): `undefined` \| `WorldCoords`

#### Returns

`undefined` \| `WorldCoords`

___

### getHoveringOverPlanet

▸ **getHoveringOverPlanet**(): `undefined` \| `Planet`

#### Returns

`undefined` \| `Planet`

___

### getIsChoosingTargetPlanet

▸ **getIsChoosingTargetPlanet**(): `boolean`

#### Returns

`boolean`

___

### getIsHighPerfMode

▸ **getIsHighPerfMode**(): `boolean`

#### Returns

`boolean`

___

### getLocationOfPlanet

▸ **getLocationOfPlanet**(`planetId`): `undefined` \| `WorldLocation`

#### Parameters

| Name | Type |
| :------ | :------ |
| `planetId` | `LocationId` |

#### Returns

`undefined` \| `WorldLocation`

___

### getLocationsAndChunks

▸ **getLocationsAndChunks**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `cachedPlanets` | `Map`<`LocationId`, `PlanetRenderInfo`\> |
| `chunks` | `Set`<`Chunk`\> |

___

### getMouseDownPlanet

▸ **getMouseDownPlanet**(): `undefined` \| `LocatablePlanet`

#### Returns

`undefined` \| `LocatablePlanet`

___

### getPerlinConfig

▸ **getPerlinConfig**(`isBiome`): `PerlinConfig`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isBiome` | `boolean` |

#### Returns

`PerlinConfig`

___

### getPerlinThresholds

▸ **getPerlinThresholds**(): [`number`, `number`, `number`]

#### Returns

[`number`, `number`, `number`]

___

### getPlanetWithCoords

▸ **getPlanetWithCoords**(`coords`): `undefined` \| `Planet`

#### Parameters

| Name | Type |
| :------ | :------ |
| `coords` | `undefined` \| `WorldCoords` |

#### Returns

`undefined` \| `Planet`

___

### getPlanetWithId

▸ **getPlanetWithId**(`planetId`): `undefined` \| `Planet`

#### Parameters

| Name | Type |
| :------ | :------ |
| `planetId` | `undefined` \| `LocationId` |

#### Returns

`undefined` \| `Planet`

___

### getPlayer

▸ **getPlayer**(`address?`): `undefined` \| `Player`

#### Parameters

| Name | Type |
| :------ | :------ |
| `address?` | `EthAddress` |

#### Returns

`undefined` \| `Player`

___

### getRadiusOfPlanetLevel

▸ **getRadiusOfPlanetLevel**(`planetRarity`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `planetRarity` | `PlanetLevel` |

#### Returns

`number`

___

### getSelectedCoords

▸ **getSelectedCoords**(): `undefined` \| `WorldCoords`

#### Returns

`undefined` \| `WorldCoords`

___

### getSelectedPlanet

▸ **getSelectedPlanet**(): `undefined` \| `LocatablePlanet`

#### Returns

`undefined` \| `LocatablePlanet`

___

### getSpaceTypePerlin

▸ **getSpaceTypePerlin**(`coords`, `floor`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `coords` | `WorldCoords` |
| `floor` | `boolean` |

#### Returns

`number`

___

### getStringSetting

▸ **getStringSetting**(`setting`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `setting` | `Setting` |

#### Returns

`undefined` \| `string`

___

### getUnconfirmedMoves

▸ **getUnconfirmedMoves**(): `Transaction`<`UnconfirmedMove`\>[]

#### Returns

`Transaction`<`UnconfirmedMove`\>[]

___

### getUnconfirmedWormholeActivations

▸ **getUnconfirmedWormholeActivations**(): `Transaction`<`UnconfirmedActivateArtifact`\>[]

#### Returns

`Transaction`<`UnconfirmedActivateArtifact`\>[]

___

### getWorldRadius

▸ **getWorldRadius**(): `number`

#### Returns

`number`

___

### getWormholes

▸ **getWormholes**(): `Iterable`<`Wormhole`\>

#### Returns

`Iterable`<`Wormhole`\>

___

### isAbandoning

▸ **isAbandoning**(): `boolean`

#### Returns

`boolean`

___

### isOverOwnPlanet

▸ **isOverOwnPlanet**(`coords`): `undefined` \| `Planet`

#### Parameters

| Name | Type |
| :------ | :------ |
| `coords` | `WorldCoords` |

#### Returns

`undefined` \| `Planet`

___

### isOwnedByMe

▸ **isOwnedByMe**(`planet`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `planet` | `Planet` |

#### Returns

`boolean`

___

### isSendingShip

▸ **isSendingShip**(`planetId`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `planetId` | `LocationId` |

#### Returns

`boolean`

___

### spaceTypeFromPerlin

▸ **spaceTypeFromPerlin**(`perlin`): `SpaceType`

#### Parameters

| Name | Type |
| :------ | :------ |
| `perlin` | `number` |

#### Returns

`SpaceType`
