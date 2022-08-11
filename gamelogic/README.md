# @projectsophon/gamelogic

## Table of contents

### Type Aliases

- [ArtifactFileColor](README.md#artifactfilecolor)

### Variables

- [ArtifactFileColor](README.md#artifactfilecolor-1)
- [RelicsList](README.md#relicslist)

### Functions

- [artifactAvailableTimestamp](README.md#artifactavailabletimestamp)
- [artifactBiomeName](README.md#artifactbiomename)
- [artifactFileName](README.md#artifactfilename)
- [artifactRoll](README.md#artifactroll)
- [biomeName](README.md#biomename)
- [canActivateArtifact](README.md#canactivateartifact)
- [canDepositArtifact](README.md#candepositartifact)
- [canWithdrawArtifact](README.md#canwithdrawartifact)
- [dateMintedAt](README.md#datemintedat)
- [durationUntilArtifactAvailable](README.md#durationuntilartifactavailable)
- [formatNumber](README.md#formatnumber)
- [getActivatedArtifact](README.md#getactivatedartifact)
- [getActiveBlackDomain](README.md#getactiveblackdomain)
- [getArtifactDebugName](README.md#getartifactdebugname)
- [getPlanetRank](README.md#getplanetrank)
- [getPlayerControlledSpaceships](README.md#getplayercontrolledspaceships)
- [getRange](README.md#getrange)
- [hasOwner](README.md#hasowner)
- [hasStatBoost](README.md#hasstatboost)
- [isActivated](README.md#isactivated)
- [isAncient](README.md#isancient)
- [isBasic](README.md#isbasic)
- [isEmojiFlagMessage](README.md#isemojiflagmessage)
- [isLocatable](README.md#islocatable)
- [isRelic](README.md#isrelic)
- [isSpaceShip](README.md#isspaceship)
- [levelFromRarity](README.md#levelfromrarity)
- [rarityName](README.md#rarityname)
- [rarityNameFromArtifact](README.md#raritynamefromartifact)
- [setForceAncient](README.md#setforceancient)
- [timeUntilNextBroadcastAvailable](README.md#timeuntilnextbroadcastavailable)

## Type Aliases

### ArtifactFileColor

Ƭ **ArtifactFileColor**: `Abstract`<`number`, ``"ArtifactFileColor"``\>

## Variables

### ArtifactFileColor

• **ArtifactFileColor**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `APP_BACKGROUND` | [`ArtifactFileColor`](README.md#artifactfilecolor-1) |
| `BLUE` | [`ArtifactFileColor`](README.md#artifactfilecolor-1) |

___

### RelicsList

• `Const` **RelicsList**: `ArtifactType`[]

## Functions

### artifactAvailableTimestamp

▸ **artifactAvailableTimestamp**(`artifact`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `artifact` | `Artifact` |

#### Returns

`number`

___

### artifactBiomeName

▸ **artifactBiomeName**(`artifact`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `artifact` | `Artifact` |

#### Returns

`string`

___

### artifactFileName

▸ **artifactFileName**(`videoMode`, `thumb`, `artifact`, `color`, `debugProps?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `videoMode` | `boolean` | `undefined` |
| `thumb` | `boolean` | `undefined` |
| `artifact` | `RenderedArtifact` | `undefined` |
| `color` | [`ArtifactFileColor`](README.md#artifactfilecolor-1) | `undefined` |
| `debugProps` | `undefined` \| { `forceAncient`: `boolean` ; `skipCaching`: `boolean`  } | `undefined` |

#### Returns

`string`

___

### artifactRoll

▸ **artifactRoll**(`id`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `ArtifactId` |

#### Returns

`number`

___

### biomeName

▸ **biomeName**(`biome`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `biome` | `Biome` |

#### Returns

`string`

___

### canActivateArtifact

▸ **canActivateArtifact**(`artifact`, `planet`, `artifactsOnPlanet`): `undefined` \| `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `artifact` | `Artifact` |
| `planet` | `undefined` \| `Planet` |
| `artifactsOnPlanet` | `Artifact`[] |

#### Returns

`undefined` \| `boolean`

___

### canDepositArtifact

▸ **canDepositArtifact**(`account`, `artifact`, `planet?`): `undefined` \| `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `EthAddress` |
| `artifact` | `Artifact` |
| `planet?` | `Planet` |

#### Returns

`undefined` \| `boolean`

___

### canWithdrawArtifact

▸ **canWithdrawArtifact**(`account`, `artifact`, `planet?`): `undefined` \| `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `EthAddress` |
| `artifact` | `Artifact` |
| `planet?` | `Planet` |

#### Returns

`undefined` \| `boolean`

___

### dateMintedAt

▸ **dateMintedAt**(`artifact`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `artifact` | `undefined` \| `Artifact` |

#### Returns

`string`

___

### durationUntilArtifactAvailable

▸ **durationUntilArtifactAvailable**(`artifact`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `artifact` | `Artifact` |

#### Returns

`number`

___

### formatNumber

▸ **formatNumber**(`num`, `smallDec?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `num` | `number` | `undefined` |
| `smallDec` | `number` | `0` |

#### Returns

`string`

___

### getActivatedArtifact

▸ **getActivatedArtifact**(`artifacts`): `Artifact` \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `artifacts` | `Artifact`[] |

#### Returns

`Artifact` \| `undefined`

___

### getActiveBlackDomain

▸ **getActiveBlackDomain**(`artifacts`): `Artifact` \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `artifacts` | `Artifact`[] |

#### Returns

`Artifact` \| `undefined`

___

### getArtifactDebugName

▸ **getArtifactDebugName**(`a?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a?` | `Artifact` |

#### Returns

`string`

___

### getPlanetRank

▸ **getPlanetRank**(`planet`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `planet` | `undefined` \| `Planet` |

#### Returns

`number`

___

### getPlayerControlledSpaceships

▸ **getPlayerControlledSpaceships**(`artifacts`, `owner`): (`undefined` \| `Artifact`)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `artifacts` | `undefined` \| (`undefined` \| `Artifact`)[] |
| `owner` | `undefined` \| `EthAddress` |

#### Returns

(`undefined` \| `Artifact`)[]

___

### getRange

▸ **getRange**(`planet`, `percentEnergySending?`, `rangeBoost?`): `number`

**`Todo`**

- planet class

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `planet` | `Planet` | `undefined` | - |
| `percentEnergySending` | `number` | `100` | - |
| `rangeBoost` | `number` | `1` | A multiplier to be applied to the resulting range. Currently used for calculating boost associated with abandoning a planet. |

#### Returns

`number`

___

### hasOwner

▸ **hasOwner**(`planet`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `planet` | `Planet` |

#### Returns

`boolean`

___

### hasStatBoost

▸ **hasStatBoost**(`type`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `undefined` \| `ArtifactType` |

#### Returns

`boolean`

___

### isActivated

▸ **isActivated**(`artifact`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `artifact` | `undefined` \| `Artifact` |

#### Returns

`boolean`

___

### isAncient

▸ **isAncient**(`artifact`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `artifact` | `RenderedArtifact` |

#### Returns

`boolean`

___

### isBasic

▸ **isBasic**(`type`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `ArtifactType` |

#### Returns

`boolean`

___

### isEmojiFlagMessage

▸ **isEmojiFlagMessage**(`planetMessage`): planetMessage is PlanetMessage<EmojiFlagBody\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `planetMessage` | `PlanetMessage`<`unknown`\> |

#### Returns

planetMessage is PlanetMessage<EmojiFlagBody\>

___

### isLocatable

▸ **isLocatable**(`planet?`): planet is LocatablePlanet

#### Parameters

| Name | Type |
| :------ | :------ |
| `planet?` | `Planet` |

#### Returns

planet is LocatablePlanet

___

### isRelic

▸ **isRelic**(`type`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `ArtifactType` |

#### Returns

`boolean`

___

### isSpaceShip

▸ **isSpaceShip**(`type`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `undefined` \| `ArtifactType` |

#### Returns

`boolean`

___

### levelFromRarity

▸ **levelFromRarity**(`rarity`): `PlanetLevel`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rarity` | `ArtifactRarity` |

#### Returns

`PlanetLevel`

___

### rarityName

▸ **rarityName**(`rarity`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rarity` | `ArtifactRarity` |

#### Returns

`string`

___

### rarityNameFromArtifact

▸ **rarityNameFromArtifact**(`a`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `Artifact` |

#### Returns

`string`

___

### setForceAncient

▸ **setForceAncient**(`force`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `force` | `boolean` |

#### Returns

`void`

___

### timeUntilNextBroadcastAvailable

▸ **timeUntilNextBroadcastAvailable**(`lastRevealTimestamp`, `locationRevealCooldown`): `number`

Gets the time (ms) until we can broadcast the coordinates of a planet.

#### Parameters

| Name | Type |
| :------ | :------ |
| `lastRevealTimestamp` | `undefined` \| `number` |
| `locationRevealCooldown` | `number` |

#### Returns

`number`
