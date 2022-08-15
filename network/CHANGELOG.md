# Changelog

## [0.1.3](https://github.com/projectsophon/zkgame-primitives/compare/network-v0.1.2...network-v0.1.3) (2022-08-15)


### Miscellaneous Chores

* **network:** Synchronize zkgame-primitives versions


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @projectsophon/constants bumped from ^0.1.2 to ^0.1.3
    * @projectsophon/events bumped from ^0.1.2 to ^0.1.3
    * @projectsophon/serde bumped from ^0.1.2 to ^0.1.3
    * @projectsophon/types bumped from ^0.1.2 to ^0.1.3

## [0.1.2](https://github.com/projectsophon/zkgame-primitives/compare/network-v0.1.1...network-v0.1.2) (2022-08-15)


### Bug Fixes

* **network:** Ensure cached contract is used if available ([28c2261](https://github.com/projectsophon/zkgame-primitives/commit/28c226171e489c9c4595b1ce6414d0cb24499d6b))
* **network:** Set RPC polling interval to 1 second ([46ec6f4](https://github.com/projectsophon/zkgame-primitives/commit/46ec6f45735a1dba3988b410a2622c0e1294e253))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @projectsophon/constants bumped from ^0.1.1 to ^0.1.2
    * @projectsophon/events bumped from ^0.1.1 to ^0.1.2
    * @projectsophon/serde bumped from ^0.1.1 to ^0.1.2
    * @projectsophon/types bumped from ^0.1.1 to ^0.1.2

## [0.1.1](https://github.com/projectsophon/zkgame-primitives/compare/network-v0.1.0...network-v0.1.1) (2022-08-13)


### Bug Fixes

* **network:** Export the ContractManager from the root ([8bf5fd7](https://github.com/projectsophon/zkgame-primitives/commit/8bf5fd70ebcdef378c8c7a2739e9667d910f1c35))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @projectsophon/constants bumped from ^0.1.0 to ^0.1.1
    * @projectsophon/events bumped from ^0.1.0 to ^0.1.1
    * @projectsophon/serde bumped from ^0.1.0 to ^0.1.1
    * @projectsophon/types bumped from ^0.1.0 to ^0.1.1

## 0.1.0 (2022-08-12)


### ⚠ BREAKING CHANGES

* Refactor code so it compiles under new tsconfig
* Rip out some DF interdependent stuff
* Switch to projectsophon tsconfig
* **network:** Extend ConnectionManager & ContractManager with Store
* **network:** Rename EthConnection to ConnectionManager
* **network:** Reduce EthConnection to only handle Connection & Wallet

### Features

* **network:** Add ContractManager to deal with Contracts ([19f1b63](https://github.com/projectsophon/zkgame-primitives/commit/19f1b63d76f7742cb0ae3d1f24793743191f0759))
* **network:** Extend ConnectionManager & ContractManager with Store ([bfa30c2](https://github.com/projectsophon/zkgame-primitives/commit/bfa30c256477b0a0f09ef72c78c1b4c07e697709))
* **network:** Reduce EthConnection to only handle Connection & Wallet ([19f1b63](https://github.com/projectsophon/zkgame-primitives/commit/19f1b63d76f7742cb0ae3d1f24793743191f0759))
* **network:** Rename EthConnection to ConnectionManager ([80692b6](https://github.com/projectsophon/zkgame-primitives/commit/80692b6271f39445c322e4e92a9f099462580e60))


### Bug Fixes

* **network:** Extend BaseContract to work with newer typechain ([add4550](https://github.com/projectsophon/zkgame-primitives/commit/add45509daece030f7c22c60fd512ed64336e287))


### Miscellaneous Chores

* Refactor code so it compiles under new tsconfig ([5e230aa](https://github.com/projectsophon/zkgame-primitives/commit/5e230aa0562d086f0df24ec53a9952675c0d4c9e))
* Rip out some DF interdependent stuff ([5e230aa](https://github.com/projectsophon/zkgame-primitives/commit/5e230aa0562d086f0df24ec53a9952675c0d4c9e))
* Switch to projectsophon tsconfig ([5e230aa](https://github.com/projectsophon/zkgame-primitives/commit/5e230aa0562d086f0df24ec53a9952675c0d4c9e))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @projectsophon/constants bumped from 0.0.0 to ^0.1.0
    * @projectsophon/events bumped from 0.0.0 to ^0.1.0
    * @projectsophon/serde bumped from 0.0.0 to ^0.1.0
    * @projectsophon/types bumped from 0.0.0 to ^0.1.0
