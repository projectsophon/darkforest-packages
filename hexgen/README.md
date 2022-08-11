# @projectsophon/hexgen

This package contains functions for determining various properties of Dark Forest objects based on their ID in hex. You could think of this package like procedural generation for Ethereum addresses.

**Note:** This package _might_ go away when objects become classes that contain a lot of these helpers as instance methods.

## Installation

You can install this package using [`npm`](https://www.npmjs.com) or
[`yarn`](https://classic.yarnpkg.com/lang/en/) by running:

```bash
npm install --save @projectsophon/hexgen
```
```bash
yarn add @projectsophon/hexgen
```

When using this in a plugin, you might want to load it with [skypack](https://www.skypack.dev)

```js
import * as hexgen from 'http://cdn.skypack.dev/@projectsophon/hexgen'
```

## Table of contents

### Functions

- [bonusFromHex](README.md#bonusfromhex)
- [getBytesFromHex](README.md#getbytesfromhex)
- [planetHasBonus](README.md#planethasbonus)

## Functions

### bonusFromHex

▸ **bonusFromHex**(`hex`): `PlanetBonus`

Extracts the bonuses of a planet given its LocationID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hex` | `LocationId` | LocationID of a planet. |

#### Returns

`PlanetBonus`

___

### getBytesFromHex

▸ **getBytesFromHex**(`hexStr`, `startByte`, `endByte`): `bigint`

The core method for extracting planet details from a LocationID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hexStr` | `string` | LocationID of a planet. |
| `startByte` | `number` | The first byte to include in the result. |
| `endByte` | `number` | The byte _after_ the last byte to include in the result. |

#### Returns

`bigint`

___

### planetHasBonus

▸ **planetHasBonus**(`planet?`): `boolean`

Checks if the LocationID of the planet indicates any bonuses.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `planet?` | `Planet` | Planet to check for bonuses. |

#### Returns

`boolean`
