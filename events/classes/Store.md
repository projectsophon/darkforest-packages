# Class: Store

## Table of contents

### Constructors

- [constructor](Store.md#constructor)

### Properties

- [#subscriptions](Store.md##subscriptions)

### Methods

- [clear](Store.md#clear)
- [notify](Store.md#notify)
- [subscribe](Store.md#subscribe)

## Constructors

### constructor

• **new Store**()

## Properties

### #subscriptions

• `Private` **#subscriptions**: `Set`<[`Subscription`](../README.md#subscription)<[`Store`](Store.md)\>\>

## Methods

### clear

▸ **clear**(): `void`

#### Returns

`void`

___

### notify

▸ **notify**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

___

### subscribe

▸ **subscribe**(`subscription`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `subscription` | [`Subscription`](../README.md#subscription)<[`Store`](Store.md)\> |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`
