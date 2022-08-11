# Interface: NetworkEvent

Each time a transaction either reverts or confirms we send an event to the webserver with this
diagnostic info about the transaction, so that we can analyze the performance of the network in
aggregate across our player-base.

## Table of contents

### Properties

- [auto\_gas\_price\_setting](NetworkEvent.md#auto_gas_price_setting)
- [error](NetworkEvent.md#error)
- [parsed\_error](NetworkEvent.md#parsed_error)
- [rpc\_endpoint](NetworkEvent.md#rpc_endpoint)
- [time\_exec\_called](NetworkEvent.md#time_exec_called)
- [tx\_hash](NetworkEvent.md#tx_hash)
- [tx\_to](NetworkEvent.md#tx_to)
- [tx\_type](NetworkEvent.md#tx_type)
- [user\_address](NetworkEvent.md#user_address)
- [wait\_confirm](NetworkEvent.md#wait_confirm)
- [wait\_error](NetworkEvent.md#wait_error)
- [wait\_submit](NetworkEvent.md#wait_submit)

## Properties

### auto\_gas\_price\_setting

• `Optional` **auto\_gas\_price\_setting**: `string` \| [`AutoGasSetting`](../README.md#autogassetting-1)

If the user has specified that they want to use an auto gas setting (which is the case by
default in our client), then this value contains the string representation of that setting. In
certain cases this can also be a string number.

___

### error

• `Optional` **error**: `string`

If there was an error executing this transaction, contains a stringified version of that error.

___

### parsed\_error

• `Optional` **parsed\_error**: `string`

If the error was returned as a byte string, contains a parsed version of that error.

___

### rpc\_endpoint

• `Optional` **rpc\_endpoint**: `string`

The url of the node fleet this transaction was sent to.

___

### time\_exec\_called

• **time\_exec\_called**: `number`

Timestamp of when the transaction was first uploaded to the network.

___

### tx\_hash

• `Optional` **tx\_hash**: `string`

If the transaction was confirmed, this is the transaction hash.

___

### tx\_to

• **tx\_to**: `string`

Contract address to which the transaction was sent.

___

### tx\_type

• **tx\_type**: `string`

Function name that the transaction is calling on the contract.

___

### user\_address

• `Optional` **user\_address**: `string`

The address on behalf of which this transaction was sent.

___

### wait\_confirm

• `Optional` **wait\_confirm**: `number`

If the transaction confirmed, the amount of time the client had to wait before it became aware
of the confirmation.

___

### wait\_error

• `Optional` **wait\_error**: `number`

If the transaction confirmed, the amount of time the client had to wait before it became aware
of the confirmation.

___

### wait\_submit

• `Optional` **wait\_submit**: `number`

The amount of time the client had to wait until the transaction was submitted to the pool.
