# Interface: Transaction<T\>

Represents a transaction that the game would like to submit to the blockchain.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `TxIntent` = `TxIntent` |

## Table of contents

### Properties

- [autoGasPriceSetting](Transaction.md#autogaspricesetting)
- [confirmedPromise](Transaction.md#confirmedpromise)
- [hash](Transaction.md#hash)
- [id](Transaction.md#id)
- [intent](Transaction.md#intent)
- [lastUpdatedAt](Transaction.md#lastupdatedat)
- [onReceiptError](Transaction.md#onreceipterror)
- [onSubmissionError](Transaction.md#onsubmissionerror)
- [onTransactionReceipt](Transaction.md#ontransactionreceipt)
- [onTransactionResponse](Transaction.md#ontransactionresponse)
- [overrides](Transaction.md#overrides)
- [state](Transaction.md#state)
- [submittedPromise](Transaction.md#submittedpromise)

## Properties

### autoGasPriceSetting

• `Optional` **autoGasPriceSetting**: `string` \| [`AutoGasSetting`](../README.md#autogassetting-1)

If the user provided an auto gas setting, record that here for logging purposes.

___

### confirmedPromise

• **confirmedPromise**: `Promise`<`TransactionReceipt`\>

Resolves or rejects depending on the success or failure of this transaction to execute.

___

### hash

• `Optional` **hash**: `string`

Once this transaction has been submitted to the blockchain (but not before), then
{@code TxExecutor} sets this field to the hash of the transaction.

___

### id

• **id**: `number`

Uniquely identifies this transaction. Invariant throughout the entire life of a transaction,
from the moment the game conceives of taking that action, to the moment that it finishes either
successfully or with an error.

___

### intent

• **intent**: `T`

In-game representation of this transaction.

___

### lastUpdatedAt

• **lastUpdatedAt**: `number`

The timestamp of the last time this transaction's state was updated.

___

### onReceiptError

• **onReceiptError**: (`e`: `undefined` \| `Error`) => `void`

#### Type declaration

▸ (`e`): `void`

Called if there was an error waiting for this transaction to complete.

##### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `undefined` \| `Error` |

##### Returns

`void`

___

### onSubmissionError

• **onSubmissionError**: (`e`: `undefined` \| `Error`) => `void`

#### Type declaration

▸ (`e`): `void`

Called if there was an error submitting this transaction.

##### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `undefined` \| `Error` |

##### Returns

`void`

___

### onTransactionReceipt

• **onTransactionReceipt**: (`e`: `TransactionReceipt`) => `void`

#### Type declaration

▸ (`e`): `void`

Called when the transaction successfully completes.

##### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `TransactionReceipt` |

##### Returns

`void`

___

### onTransactionResponse

• **onTransactionResponse**: (`e`: `TransactionResponse`) => `void`

#### Type declaration

▸ (`e`): `void`

Called when the transaction was successfully submitted to the mempool.

##### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `TransactionResponse` |

##### Returns

`void`

___

### overrides

• `Optional` **overrides**: `TransactionRequest`

Overrides parameters which modifies the internal details of this transaction.

___

### state

• **state**: [`EthTxStatus`](../README.md#ethtxstatus)

The current state of this transaction - updated whenever the state changes by {@code TxExecutor}

___

### submittedPromise

• **submittedPromise**: `Promise`<`TransactionResponse`\>

Resolves or rejects depending on the success or failure of this transaction to get into the
mempool. If this rejects, PendingTransaction.confirmed neither rejects nor resolves.
