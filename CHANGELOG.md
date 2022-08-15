# Changelog

## [0.1.3](https://github.com/projectsophon/zkgame-primitives/compare/root-v0.1.2...root-v0.1.3) (2022-08-15)


### Bug Fixes

* **hashing:** Ensure bigFraction works as ESM ([91be4ce](https://github.com/projectsophon/zkgame-primitives/commit/91be4ce7425a3ffbb997dafd9e32a89b7dc07e4a))

## [0.1.2](https://github.com/projectsophon/zkgame-primitives/compare/root-v0.1.1...root-v0.1.2) (2022-08-15)


### Bug Fixes

* **network:** Ensure cached contract is used if available ([28c2261](https://github.com/projectsophon/zkgame-primitives/commit/28c226171e489c9c4595b1ce6414d0cb24499d6b))
* **network:** Set RPC polling interval to 1 second ([46ec6f4](https://github.com/projectsophon/zkgame-primitives/commit/46ec6f45735a1dba3988b410a2622c0e1294e253))

## [0.1.1](https://github.com/projectsophon/zkgame-primitives/compare/root-v0.1.0...root-v0.1.1) (2022-08-13)


### Bug Fixes

* **network:** Export the ContractManager from the root ([8bf5fd7](https://github.com/projectsophon/zkgame-primitives/commit/8bf5fd70ebcdef378c8c7a2739e9667d910f1c35))

## 0.1.0 (2022-08-12)


### ⚠ BREAKING CHANGES

* Rename procedural package to procgen
* Rename snarks package to snarkjs-helpers
* Restructure snarks package
* Remove contracts package since it is project specific
* **snarks:** Remove anything DF specific
* **snarks:** Remove DF artifacts
* Refactor code so it compiles under new tsconfig
* Rip out some DF interdependent stuff
* Switch to projectsophon tsconfig
* **network:** Extend ConnectionManager & ContractManager with Store
* **network:** Rename EthConnection to ConnectionManager
* **network:** Reduce EthConnection to only handle Connection & Wallet

### Features

* **events:** Implement Store class that can be inherited ([b382f4b](https://github.com/projectsophon/zkgame-primitives/commit/b382f4b575f1ced408f493dc2a81be22b58f7ba1))
* **network:** Add ContractManager to deal with Contracts ([19f1b63](https://github.com/projectsophon/zkgame-primitives/commit/19f1b63d76f7742cb0ae3d1f24793743191f0759))
* **network:** Extend ConnectionManager & ContractManager with Store ([bfa30c2](https://github.com/projectsophon/zkgame-primitives/commit/bfa30c256477b0a0f09ef72c78c1b4c07e697709))
* **network:** Reduce EthConnection to only handle Connection & Wallet ([19f1b63](https://github.com/projectsophon/zkgame-primitives/commit/19f1b63d76f7742cb0ae3d1f24793743191f0759))
* **network:** Rename EthConnection to ConnectionManager ([80692b6](https://github.com/projectsophon/zkgame-primitives/commit/80692b6271f39445c322e4e92a9f099462580e60))
* **snarks:** Rework implementation to be generic ([3870f7c](https://github.com/projectsophon/zkgame-primitives/commit/3870f7c0f61dd6f00cd19ae685c398074270e5f7))


### Bug Fixes

* **network:** Extend BaseContract to work with newer typechain ([add4550](https://github.com/projectsophon/zkgame-primitives/commit/add45509daece030f7c22c60fd512ed64336e287))


### Miscellaneous Chores

* Refactor code so it compiles under new tsconfig ([5e230aa](https://github.com/projectsophon/zkgame-primitives/commit/5e230aa0562d086f0df24ec53a9952675c0d4c9e))
* Remove contracts package since it is project specific ([c71d839](https://github.com/projectsophon/zkgame-primitives/commit/c71d839a3fcc7b1b51b70eeee507da04eaa662b2))
* Rename procedural package to procgen ([5a2b444](https://github.com/projectsophon/zkgame-primitives/commit/5a2b44452cca6b6a0225e154f0fdc44af2dca16a))
* Rename snarks package to snarkjs-helpers ([aa1a9a1](https://github.com/projectsophon/zkgame-primitives/commit/aa1a9a11b49f89bbed337608f2b73ef1e79aed25))
* Restructure snarks package ([aa1a9a1](https://github.com/projectsophon/zkgame-primitives/commit/aa1a9a11b49f89bbed337608f2b73ef1e79aed25))
* Rip out some DF interdependent stuff ([5e230aa](https://github.com/projectsophon/zkgame-primitives/commit/5e230aa0562d086f0df24ec53a9952675c0d4c9e))
* **snarks:** Remove anything DF specific ([3870f7c](https://github.com/projectsophon/zkgame-primitives/commit/3870f7c0f61dd6f00cd19ae685c398074270e5f7))
* **snarks:** Remove DF artifacts ([3870f7c](https://github.com/projectsophon/zkgame-primitives/commit/3870f7c0f61dd6f00cd19ae685c398074270e5f7))
* Switch to projectsophon tsconfig ([5e230aa](https://github.com/projectsophon/zkgame-primitives/commit/5e230aa0562d086f0df24ec53a9952675c0d4c9e))
