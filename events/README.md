# @projectsophon/events

This package contains a typed, single pub/sub pattern used in the Dark Forest game.
Inspired by https://www.npmjs.com/package/monomitter

## Installation

You can install this package using [`npm`](https://www.npmjs.com) or
[`yarn`](https://classic.yarnpkg.com/lang/en/) by running:

```bash
npm install --save @projectsophon/events
```
```bash
yarn add @projectsophon/events
```

When using this in a plugin, you might want to load it with [skypack](https://www.skypack.dev)

```js
import * as events from 'http://cdn.skypack.dev/@projectsophon/events'
```

## Table of contents

### Classes

- [Store](classes/Store.md)

### Type Aliases

- [Callback](README.md#callback)
- [Monomitter](README.md#monomitter)
- [Subscription](README.md#subscription)
- [Unsubscribe](README.md#unsubscribe)

### Functions

- [monomitter](README.md#monomitter-1)

## Type Aliases

### Callback

Ƭ **Callback**<`T`\>: (`data`: `T`) => `Promise`<`void`\> \| `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

▸ (`data`): `Promise`<`void`\> \| `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `T` |

##### Returns

`Promise`<`void`\> \| `void`

___

### Monomitter

Ƭ **Monomitter**<`T`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `clear` | () => `void` |
| `publish` | (`data`: `T`) => `Promise`<`void`\> |
| `subscribe` | (`cb`: [`Callback`](README.md#callback)<`T`\>) => { `unsubscribe`: () => `void`  } |

___

### Subscription

Ƭ **Subscription**<`T`\>: (`data`: `T`) => `Promise`<`void`\> \| `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

▸ (`data`): `Promise`<`void`\> \| `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `T` |

##### Returns

`Promise`<`void`\> \| `void`

___

### Unsubscribe

Ƭ **Unsubscribe**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

## Functions

### monomitter

▸ **monomitter**<`T`\>(): [`Monomitter`](README.md#monomitter)<`T`\>

Constructs a new event emitter, whose purpose is to emit values of the given type.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Monomitter`](README.md#monomitter)<`T`\>
