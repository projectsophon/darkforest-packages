# @projectsophon/constants

This package contains useful constants for use when interacting with
the Dark Forest smart contracts within JavaScript or TypeScript.

## Installation

You can install this package using [`npm`](https://www.npmjs.com) or
[`yarn`](https://classic.yarnpkg.com/lang/en/) by running:

```bash
npm install --save @projectsophon/constants
```
```bash
yarn add @projectsophon/constants
```

When using this in a plugin, you might want to load it with [skypack](https://www.skypack.dev)

```js
import * as constants from 'http://cdn.skypack.dev/@projectsophon/constants'
```

## Table of contents

### Variables

- [BLOCK\_EXPLORER\_URL](README.md#block_explorer_url)
- [CONTRACT\_PRECISION](README.md#contract_precision)
- [DEFAULT\_GAS\_PRICES](README.md#default_gas_prices)
- [DEFAULT\_MAX\_CALL\_RETRIES](README.md#default_max_call_retries)
- [EMPTY\_ADDRESS](README.md#empty_address)
- [EMPTY\_ARTIFACT\_ID](README.md#empty_artifact_id)
- [EMPTY\_LOCATION\_ID](README.md#empty_location_id)
- [GAS\_PRICES\_INTERVAL\_MS](README.md#gas_prices_interval_ms)
- [GAS\_PRICE\_API](README.md#gas_price_api)
- [HAT\_SIZES](README.md#hat_sizes)
- [LOCATION\_ID\_UB](README.md#location_id_ub)
- [MAX\_ARTIFACT\_RARITY](README.md#max_artifact_rarity)
- [MAX\_ARTIFACT\_TYPE](README.md#max_artifact_type)
- [MAX\_AUTO\_GAS\_PRICE\_GWEI](README.md#max_auto_gas_price_gwei)
- [MAX\_BIOME](README.md#max_biome)
- [MAX\_PLANET\_LEVEL](README.md#max_planet_level)
- [MAX\_SPACESHIP\_TYPE](README.md#max_spaceship_type)
- [MIN\_ARTIFACT\_RARITY](README.md#min_artifact_rarity)
- [MIN\_ARTIFACT\_TYPE](README.md#min_artifact_type)
- [MIN\_BIOME](README.md#min_biome)
- [MIN\_PLANET\_LEVEL](README.md#min_planet_level)
- [MIN\_SPACESHIP\_TYPE](README.md#min_spaceship_type)
- [PLANET\_CLAIM\_MIN\_LEVEL](README.md#planet_claim_min_level)
- [RECOMMENDED\_MODAL\_WIDTH](README.md#recommended_modal_width)
- [SpecialKey](README.md#specialkey)
- [THEGRAPH\_API\_URL](README.md#thegraph_api_url)

## Variables

### BLOCK\_EXPLORER\_URL

• `Const` **BLOCK\_EXPLORER\_URL**: ``"https://dashboard.tenderly.co/tx/xdai"``

The URL to the block explorer for the chain being used. Prepended to transaction links, etc

___

### CONTRACT\_PRECISION

• `Const` **CONTRACT\_PRECISION**: ``1000``

The precision of Energy & Silver stored in the Dark Forest smart contracts.

Energy and Silver are not stored as floats in the smart contracts,
so any of those values coming from the contracts need to be divided by `CONTRACT_PRECISION`
and any values being sent to the contract need to be multiplied by `CONTRACT_PRECISION`.

___

### DEFAULT\_GAS\_PRICES

• `Const` **DEFAULT\_GAS\_PRICES**: `GasPrices`

In case we cannot load gas prices from xDai, these are the default auto gas prices.

___

### DEFAULT\_MAX\_CALL\_RETRIES

• `Const` **DEFAULT\_MAX\_CALL\_RETRIES**: ``12``

By default, the various ContractCaller will retry a blockchain read this many times.

___

### EMPTY\_ADDRESS

• `Const` **EMPTY\_ADDRESS**: `EthAddress`

The 0x0 Ethereum address, which is used for unowned planets, artifacts without an owner, etc.

___

### EMPTY\_ARTIFACT\_ID

• `Const` **EMPTY\_ARTIFACT\_ID**: `ArtifactId`

A blank ArtifactID (all zeros).

___

### EMPTY\_LOCATION\_ID

• `Const` **EMPTY\_LOCATION\_ID**: `LocationId`

A blank LocationID (all zeros).

___

### GAS\_PRICES\_INTERVAL\_MS

• `Const` **GAS\_PRICES\_INTERVAL\_MS**: ``60000``

The amount of time between gas price refreshes when fetching prices from the oracle.

___

### GAS\_PRICE\_API

• `Const` **GAS\_PRICE\_API**: ``"https://blockscout.com/xdai/mainnet/api/v1/gas-price-oracle"``

The URL for xDai's API that returns the gas prices for 35th, 60th, and 90th percentiles of gas prices in the
previous 200 blocks. Useful for auto gas price setting.

https://www.xdaichain.com/for-developers/developer-resources/gas-price-oracle

___

### HAT\_SIZES

• `Const` **HAT\_SIZES**: `string`[]

___

### LOCATION\_ID\_UB

• `Const` **LOCATION\_ID\_UB**: `bigint`

The upper-bounds of a LocationID.

Represents the maximum possible value that the MiMC hash function (used for IDing locations in the universe) can output.
A LocationID must be less than `LOCATION_ID_UB / PLANET_RARITY` in order to be considered a valid planet.

___

### MAX\_ARTIFACT\_RARITY

• `Const` **MAX\_ARTIFACT\_RARITY**: `ArtifactRarity` = `ArtifactRarity.Mythic`

The value of the maximum, valid artifact rarity

___

### MAX\_ARTIFACT\_TYPE

• `Const` **MAX\_ARTIFACT\_TYPE**: `ArtifactType` = `ArtifactType.ShipTitan`

The value of the maximum, valid artifact type

___

### MAX\_AUTO\_GAS\_PRICE\_GWEI

• `Const` **MAX\_AUTO\_GAS\_PRICE\_GWEI**: ``15``

In case xDai's auto-price is something ridiculous, we don't want our players to insta run out of
money.

___

### MAX\_BIOME

• `Const` **MAX\_BIOME**: `Biome` = `Biome.CORRUPTED`

The value of the maximum, valid biome

___

### MAX\_PLANET\_LEVEL

• `Const` **MAX\_PLANET\_LEVEL**: `PlanetLevel` = `PlanetLevel.NINE`

The value of the maximum, valid planet level

___

### MAX\_SPACESHIP\_TYPE

• `Const` **MAX\_SPACESHIP\_TYPE**: `ArtifactType` = `ArtifactType.ShipTitan`

The value of the maximum, valid spaceship type

___

### MIN\_ARTIFACT\_RARITY

• `Const` **MIN\_ARTIFACT\_RARITY**: `ArtifactRarity` = `ArtifactRarity.Common`

The value of the minimum, valid artifact rarity

___

### MIN\_ARTIFACT\_TYPE

• `Const` **MIN\_ARTIFACT\_TYPE**: `ArtifactType` = `ArtifactType.Monolith`

The value of the minimum, valid artifact type

___

### MIN\_BIOME

• `Const` **MIN\_BIOME**: `Biome` = `Biome.OCEAN`

The value of the minimum, valid biome

___

### MIN\_PLANET\_LEVEL

• `Const` **MIN\_PLANET\_LEVEL**: `PlanetLevel` = `PlanetLevel.ZERO`

The value of the minimum, valid planet level

___

### MIN\_SPACESHIP\_TYPE

• `Const` **MIN\_SPACESHIP\_TYPE**: `ArtifactType` = `ArtifactType.ShipMothership`

The value of the minimum, valid spaceship type

___

### PLANET\_CLAIM\_MIN\_LEVEL

• `Const` **PLANET\_CLAIM\_MIN\_LEVEL**: ``3``

The minimum level required for claiming a planet.

___

### RECOMMENDED\_MODAL\_WIDTH

• `Const` **RECOMMENDED\_MODAL\_WIDTH**: ``"400px"``

PlanetContextPane is this wide, and all the subpanes of that modal also try to stay this
size as well.

___

### SpecialKey

• `Const` **SpecialKey**: `Object`

Keys to handle in a special fashion when dealing with key presses

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Control` | ``"Control"`` |
| `Escape` | ``"Escape"`` |
| `Shift` | ``"Shift"`` |
| `Space` | ``" "`` |
| `Tab` | ``"Tab"`` |

___

### THEGRAPH\_API\_URL

• `Const` **THEGRAPH\_API\_URL**: ``"https://api.thegraph.com/subgraphs/name/darkforest-eth/dark-forest-v06-round-5"``

This should be updated every round.
