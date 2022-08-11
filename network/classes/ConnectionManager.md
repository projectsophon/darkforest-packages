# Class: ConnectionManager

Responsible for managing the RPC Provider and Signer's Wallet

## Hierarchy

- `Store`

  ↳ **`ConnectionManager`**

## Table of contents

### Constructors

- [constructor](ConnectionManager.md#constructor)

### Properties

- [#private](ConnectionManager.md##private)
- [#provider](ConnectionManager.md##provider)
- [#signer](ConnectionManager.md##signer)

### Accessors

- [account](ConnectionManager.md#account)
- [privateKey](ConnectionManager.md#privatekey)
- [provider](ConnectionManager.md#provider)
- [rpcUrl](ConnectionManager.md#rpcurl)
- [signer](ConnectionManager.md#signer)

### Methods

- [clear](ConnectionManager.md#clear)
- [hasSigner](ConnectionManager.md#hassigner)
- [notify](ConnectionManager.md#notify)
- [subscribe](ConnectionManager.md#subscribe)

## Constructors

### constructor

• **new ConnectionManager**(`rpcUrl`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpcUrl` | `string` |

#### Overrides

Store.constructor

## Properties

### #private

• `Private` **#private**: `any`

#### Inherited from

Store.#private

___

### #provider

• `Private` **#provider**: `JsonRpcProvider`

___

### #signer

• `Private` **#signer**: `undefined` \| `Wallet`

## Accessors

### account

• `get` **account**(): `undefined` \| `EthAddress`

Returns the address of the signer, if one was set.

#### Returns

`undefined` \| `EthAddress`

___

### privateKey

• `get` **privateKey**(): `undefined` \| `string`

Returns the private key of the signer, if one was set.

#### Returns

`undefined` \| `string`

• `set` **privateKey**(`skey`): `void`

Changes the ethereum account on behalf of which this [ConnectionManager](ConnectionManager.md) sends transactions.

#### Parameters

| Name | Type |
| :------ | :------ |
| `skey` | `undefined` \| `string` |

#### Returns

`void`

___

### provider

• `get` **provider**(): `JsonRpcProvider`

The provider this [ConnectionManager](ConnectionManager.md) is currently using. The provider is the lowest level
interface we use to communicate with the blockchain.

Don't store a reference to this, as the provider can change!

#### Returns

`JsonRpcProvider`

___

### rpcUrl

• `get` **rpcUrl**(): `string`

#### Returns

`string`

• `set` **rpcUrl**(`url`): `void`

Changes the RPC url we're connected to, and reloads the ethers contract references.

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`void`

___

### signer

• `get` **signer**(): `undefined` \| `Wallet`

The wallet, which represents the account that this [ConnectionManager](ConnectionManager.md) sends
transactions on behalf of.

It is possible to instantiate an ConnectionManager without a signer, in which case it is still able
to connect to the blockchain, without the ability to send transactions.

#### Returns

`undefined` \| `Wallet`

## Methods

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

Store.clear

___

### hasSigner

▸ **hasSigner**(): `boolean`

#### Returns

`boolean`

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
| `subscription` | `Subscription`<[`ConnectionManager`](ConnectionManager.md)\> |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Inherited from

Store.subscribe
