# Interface: Queue

Let's keep things flexible by keeping this type small.

## Implemented by

- [`ThrottledConcurrentQueue`](../classes/ThrottledConcurrentQueue.md)

## Table of contents

### Properties

- [size](Queue.md#size)

### Methods

- [add](Queue.md#add)

## Properties

### size

• **size**: () => `number`

#### Type declaration

▸ (): `number`

##### Returns

`number`

## Methods

### add

▸ **add**<`T`\>(`start`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `start` | () => `Promise`<`T`\> |

#### Returns

`Promise`<`T`\>
