# Class: ContractManager

## Hierarchy

- `Store`

  ↳ **`ContractManager`**

## Table of contents

### Constructors

- [constructor](ContractManager.md#constructor)

### Properties

- [#connection](ContractManager.md##connection)
- [#contracts](ContractManager.md##contracts)
- [#loaders](ContractManager.md##loaders)
- [#private](ContractManager.md##private)

### Methods

- [#reloadContracts](ContractManager.md##reloadcontracts)
- [clear](ContractManager.md#clear)
- [loadContract](ContractManager.md#loadcontract)
- [notify](ContractManager.md#notify)
- [subscribe](ContractManager.md#subscribe)

## Constructors

### constructor

• **new ContractManager**(`connection`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `connection` | [`ConnectionManager`](ConnectionManager.md) |

#### Overrides

Store.constructor

## Properties

### #connection

• `Private` **#connection**: [`ConnectionManager`](ConnectionManager.md)

A private reference to the [ConnectionManager](ConnectionManager.md) used by this [ContractManager](ContractManager.md).

___

### #contracts

• `Private` **#contracts**: `Map`<`string`, `BaseContract`\>

A private reference to all the contracts this [ContractManager](ContractManager.md) has loaded
so that they can be reloaded if the RPC url changes.

Keyed by the contract address.

___

### #loaders

• `Private` **#loaders**: `Map`<`string`, [`ContractLoader`](../README.md#contractloader)<`BaseContract`\>\>

A private reference to all the contract loaders this [ContractManager](ContractManager.md) has loaded
so that they can be reloaded if the RPC url changes.

Keyed by the contract address.

___

### #private

• `Private` **#private**: `any`

#### Inherited from

Store.#private

## Methods

### #reloadContracts

▸ `Private` **#reloadContracts**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

Store.clear

___

### loadContract

▸ **loadContract**<`C`\>(`address`, `loader?`): `Promise`<`C`\>

Provides a Contract to the consumer. Will load a Contract, using the loader,
if it has never been loaded before.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends `BaseContract`<`C`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | The contract address to register the contract against. |
| `loader?` | [`ContractLoader`](../README.md#contractloader)<`C`\> | The loader used to load (or reload) the contract. |

#### Returns

`Promise`<`C`\>

___

### notify

▸ **notify**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

Store.notify

___

### subscribe

▸ **subscribe**(`subscription`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `subscription` | `Subscription`<[`ContractManager`](ContractManager.md)\> |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Inherited from

Store.subscribe
