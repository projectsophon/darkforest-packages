# @projectsophon/procgen

## Table of contents

### Type Aliases

- [PixelCoords](README.md#pixelcoords)
- [QuoteData](README.md#quotedata)

### Variables

- [grayColors](README.md#graycolors)
- [mockCommon](README.md#mockcommon)
- [mockEpic](README.md#mockepic)
- [mockLegendary](README.md#mocklegendary)
- [mockRare](README.md#mockrare)

### Functions

- [artifactName](README.md#artifactname)
- [artifactRandom](README.md#artifactrandom)
- [artifactRandomInt](README.md#artifactrandomint)
- [getBiomeRgbStr](README.md#getbiomergbstr)
- [getHatSizeName](README.md#gethatsizename)
- [getOwnerColor](README.md#getownercolor)
- [getOwnerColorVec](README.md#getownercolorvec)
- [getPlanetBlurb](README.md#getplanetblurb)
- [getPlanetBlurb2](README.md#getplanetblurb2)
- [getPlanetClass](README.md#getplanetclass)
- [getPlanetCosmetic](README.md#getplanetcosmetic)
- [getPlanetName](README.md#getplanetname)
- [getPlanetNameHash](README.md#getplanetnamehash)
- [getPlanetTagline](README.md#getplanettagline)
- [getPlanetTitle](README.md#getplanettitle)
- [getPlayerColor](README.md#getplayercolor)
- [getPlayerColorVec](README.md#getplayercolorvec)
- [getRuinsInfo](README.md#getruinsinfo)
- [hashToHue](README.md#hashtohue)
- [hatTypeFromHash](README.md#hattypefromhash)
- [hslStr](README.md#hslstr)
- [hslToRgb](README.md#hsltorgb)
- [mockArtifact](README.md#mockartifact)
- [mockArtifactWithRarity](README.md#mockartifactwithrarity)
- [planetPerlin](README.md#planetperlin)
- [planetRandom](README.md#planetrandom)
- [planetRandomInt](README.md#planetrandomint)
- [rgbStr](README.md#rgbstr)
- [titleCase](README.md#titlecase)

## Type Aliases

### PixelCoords

Ƭ **PixelCoords**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

___

### QuoteData

Ƭ **QuoteData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `author` | `string` |
| `quote` | `string` |

## Variables

### grayColors

• `Const` **grayColors**: `PlanetCosmeticInfo`

___

### mockCommon

• `Const` **mockCommon**: `Artifact`

___

### mockEpic

• `Const` **mockEpic**: `Artifact`

___

### mockLegendary

• `Const` **mockLegendary**: `Artifact`

___

### mockRare

• `Const` **mockRare**: `Artifact`

## Functions

### artifactName

▸ **artifactName**(`artifact`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `artifact` | `undefined` \| `Artifact` |

#### Returns

`string`

___

### artifactRandom

▸ **artifactRandom**(`loc`): () => `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `loc` | `ArtifactId` |

#### Returns

`fn`

▸ (): `number`

##### Returns

`number`

___

### artifactRandomInt

▸ **artifactRandomInt**(`loc`): () => `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `loc` | `ArtifactId` |

#### Returns

`fn`

▸ (): `number`

##### Returns

`number`

___

### getBiomeRgbStr

▸ **getBiomeRgbStr**(`biome`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `biome` | `Biome` |

#### Returns

`string`

___

### getHatSizeName

▸ **getHatSizeName**(`planet`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `planet` | `Planet` |

#### Returns

`string`

___

### getOwnerColor

▸ **getOwnerColor**(`planet`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `planet` | `Planet` |

#### Returns

`string`

___

### getOwnerColorVec

▸ **getOwnerColorVec**(`planet`): `RGBAVec`

#### Parameters

| Name | Type |
| :------ | :------ |
| `planet` | `Planet` |

#### Returns

`RGBAVec`

___

### getPlanetBlurb

▸ **getPlanetBlurb**(`planet`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `planet` | `undefined` \| `Planet` |

#### Returns

`string`

___

### getPlanetBlurb2

▸ **getPlanetBlurb2**(`planet`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `planet` | `undefined` \| `Planet` |

#### Returns

`string`

___

### getPlanetClass

▸ **getPlanetClass**(`planet`): `UpgradeBranchName`

#### Parameters

| Name | Type |
| :------ | :------ |
| `planet` | `Planet` |

#### Returns

`UpgradeBranchName`

___

### getPlanetCosmetic

▸ **getPlanetCosmetic**(`planet`): `PlanetCosmeticInfo`

#### Parameters

| Name | Type |
| :------ | :------ |
| `planet` | `undefined` \| `Planet` |

#### Returns

`PlanetCosmeticInfo`

___

### getPlanetName

▸ **getPlanetName**(`planet`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `planet` | `undefined` \| `Planet` |

#### Returns

`string`

___

### getPlanetNameHash

▸ **getPlanetNameHash**(`locId`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `locId` | `LocationId` |

#### Returns

`string`

___

### getPlanetTagline

▸ **getPlanetTagline**(`planet`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `planet` | `undefined` \| `Planet` |

#### Returns

`string`

___

### getPlanetTitle

▸ **getPlanetTitle**(`planet`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `planet` | `undefined` \| `Planet` |

#### Returns

`string`

___

### getPlayerColor

▸ **getPlayerColor**(`player`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `player` | `EthAddress` |

#### Returns

`string`

___

### getPlayerColorVec

▸ **getPlayerColorVec**(`player`): `RGBAVec`

#### Parameters

| Name | Type |
| :------ | :------ |
| `player` | `EthAddress` |

#### Returns

`RGBAVec`

___

### getRuinsInfo

▸ **getRuinsInfo**(`loc`): `RuinsInfo`

#### Parameters

| Name | Type |
| :------ | :------ |
| `loc` | `LocationId` |

#### Returns

`RuinsInfo`

___

### hashToHue

▸ **hashToHue**(`hash`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `hash` | `string` |

#### Returns

`number`

___

### hatTypeFromHash

▸ **hatTypeFromHash**(`hash`): `HatType`

#### Parameters

| Name | Type |
| :------ | :------ |
| `hash` | `LocationId` |

#### Returns

`HatType`

___

### hslStr

▸ **hslStr**(`h`, `s`, `l`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `h` | `number` |
| `s` | `number` |
| `l` | `number` |

#### Returns

`string`

___

### hslToRgb

▸ **hslToRgb**(`__namedParameters`): `RGBVec`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `HSLVec` |

#### Returns

`RGBVec`

___

### mockArtifact

▸ **mockArtifact**(`rarity`, `artifactType?`, `planetBiome?`): `Artifact`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `rarity` | `ArtifactRarity` | `undefined` |
| `artifactType` | `ArtifactType` | `ArtifactType.Spaceship` |
| `planetBiome` | `Biome` | `Biome.WASTELAND` |

#### Returns

`Artifact`

___

### mockArtifactWithRarity

▸ **mockArtifactWithRarity**(`rarity`, `artifactType?`, `planetBiome?`): `Artifact`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `rarity` | `ArtifactRarity` | `undefined` |
| `artifactType` | `ArtifactType` | `ArtifactType.Spaceship` |
| `planetBiome` | `Biome` | `Biome.WASTELAND` |

#### Returns

`Artifact`

___

### planetPerlin

▸ **planetPerlin**(`loc`): (`coords`: [`PixelCoords`](README.md#pixelcoords)) => `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `loc` | `LocationId` |

#### Returns

`fn`

▸ (`coords`): `number`

##### Parameters

| Name | Type |
| :------ | :------ |
| `coords` | [`PixelCoords`](README.md#pixelcoords) |

##### Returns

`number`

___

### planetRandom

▸ **planetRandom**(`loc`): () => `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `loc` | `LocationId` |

#### Returns

`fn`

▸ (): `number`

##### Returns

`number`

___

### planetRandomInt

▸ **planetRandomInt**(`loc`): () => `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `loc` | `LocationId` |

#### Returns

`fn`

▸ (): `number`

##### Returns

`number`

___

### rgbStr

▸ **rgbStr**(`rgb`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rgb` | `RGBVec` |

#### Returns

`string`

___

### titleCase

▸ **titleCase**(`title`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `title` | `string` |

#### Returns

`string`
