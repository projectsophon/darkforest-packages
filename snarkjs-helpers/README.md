# @projectsophon/snarkjs-helpers

This package contains simple TypeScript types for working with SnarkJS,
plus utilities to convert from SnarkJS outputs to smart contract call data.

## Installation

You can install this package using [`npm`](https://www.npmjs.com) or
[`yarn`](https://classic.yarnpkg.com/lang/en/) by running:

```bash
npm install --save @projectsophon/snarkjs-helpers
```
```bash
yarn add @projectsophon/snarkjs-helpers
```

When using this in a plugin, you might want to load it with [skypack](https://www.skypack.dev)

```js
import * as snarkjsHelpers from 'http://cdn.skypack.dev/@projectsophon/snarkjs-helpers'
```

## Table of contents

### Type Aliases

- [ContractCallArgs](README.md#contractcallargs)
- [SnarkJSProof](README.md#snarkjsproof)
- [SnarkJSProofAndSignals](README.md#snarkjsproofandsignals)

### Functions

- [buildContractCallArgs](README.md#buildcontractcallargs)
- [mockProof](README.md#mockproof)

## Type Aliases

### ContractCallArgs

Ƭ **ContractCallArgs**: [[`string`, `string`], [[`string`, `string`], [`string`, `string`]], [`string`, `string`], `string`[]]

Type representing the shape that can be passed into smart contract
functions that require zkSNARK verification.

___

### SnarkJSProof

Ƭ **SnarkJSProof**: `Object`

A zkSNARK proof (without signals) generated by SnarkJS `fullProve`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `pi_a` | [`string`, `string`, `string`] |
| `pi_b` | [[`string`, `string`], [`string`, `string`], [`string`, `string`]] |
| `pi_c` | [`string`, `string`, `string`] |

___

### SnarkJSProofAndSignals

Ƭ **SnarkJSProofAndSignals**: `Object`

A zkSNARK proof and corresponding public signals generated by SnarkJS `fullProve`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `proof` | [`SnarkJSProof`](README.md#snarkjsproof) |
| `publicSignals` | `string`[] |

## Functions

### buildContractCallArgs

▸ **buildContractCallArgs**(`snarkProof`, `publicSignals`): [`ContractCallArgs`](README.md#contractcallargs)

Function for converting the output of SnarkJS `fullProve` into a shape that can be
passed into smart contract functions which perform zk proof verification.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `snarkProof` | [`SnarkJSProof`](README.md#snarkjsproof) | the SNARK proof |
| `publicSignals` | `string`[] | the circuit's public signals (i.e. output signals and public input signals) |

#### Returns

[`ContractCallArgs`](README.md#contractcallargs)

The input data in a shape that is suitable to use as smart contract call data

___

### mockProof

▸ **mockProof**(`publicSignals?`): [`SnarkJSProofAndSignals`](README.md#snarkjsproofandsignals)

Function to generate **mock** proof and signal data in the shape SnarkJS would return.

Only useful if you are using a mock hash and ZK proofs are disabled

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `publicSignals` | `string`[] | `[]` | the circuit's public signals (i.e. output signals and public input signals) |

#### Returns

[`SnarkJSProofAndSignals`](README.md#snarkjsproofandsignals)

A mock proof and public signals in the shape of SnarkJS output