# ICO:
```
truffle migrate --reset --network bsctestnet

Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.



Starting migrations...
======================
> Network name:    'bsctestnet'
> Network id:      97
> Block gas limit: 30000000 (0x1c9c380)


2_deploy_ico_only.js
====================

   Replacing 'ICO'
   ---------------
   > transaction hash:    0xfa4beb48a8992e069d20b8854bcf6e3b2fc264562e4b8f4657c5edbf609a1c58
   > Blocks: 1            Seconds: 5
   > contract address:    0x8C4f377a4f3454bA438c81bD17ffe7F82EBcC4F4
   > block number:        8192042
   > block timestamp:     1619066299
   > account:             0xE0eADa8B7610768Bc60C4cF2451959db4109BeD6
loya@Loya-N-MacBook ICO % truffle migrate --reset --network bsctestnet

Compiling your contracts...
===========================
> Compiling ./contracts/ICO.sol
> Compiling ./contracts/Token.sol
> Artifacts written to /Users/loya/Code/ICO/build/contracts
> Compiled successfully using:
   - solc: 0.8.0+commit.c7dfd78e.Emscripten.clang



Starting migrations...
======================
> Network name:    'bsctestnet'
> Network id:      97
> Block gas limit: 30000000 (0x1c9c380)


1_deploy_contracts.js
=====================

   Replacing 'Token'
   -----------------
   > transaction hash:    0x9da1191cab4fb211c243c2c3b1abeb835caa8e418413a2977c57b0c6a11d9b77
   > Blocks: 1            Seconds: 4
   > contract address:    0xF84A216c063e4a74310d5EE8F3d697c531c4be51
   > block number:        8192299
   > block timestamp:     1619067070
   > account:             0xE0eADa8B7610768Bc60C4cF2451959db4109BeD6
   > balance:             5.058039704706912506
   > gas used:            1617169 (0x18ad11)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.03234338 ETH


   Replacing 'DaiToken'
   --------------------
   > transaction hash:    0x2343674237508edd329c6af52923f24dfd63a44f29d5683101f56d1b4b58e668
   > Blocks: 3            Seconds: 8
   > contract address:    0xE7313BFAA9B75E51e5beDAeb3D737DB3a5860B4d
   > block number:        8192303
   > block timestamp:     1619067082
   > account:             0xE0eADa8B7610768Bc60C4cF2451959db4109BeD6
   > balance:             5.027524724706912506
   > gas used:            1525749 (0x1747f5)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.03051498 ETH


   Replacing 'ICO'
   ---------------
   > transaction hash:    0x08207486b1de6c5a99dbef8ed3997f27d75340aa2a068c6542457694490793bf
   > Blocks: 2            Seconds: 4
   > contract address:    0x8944883e4adF119887d79F8055DD6AE9fCB180d4
   > block number:        8192306
   > block timestamp:     1619067091
   > account:             0xE0eADa8B7610768Bc60C4cF2451959db4109BeD6
   > balance:             5.001448104706912506
   > gas used:            1303831 (0x13e517)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.02607662 ETH

   > Saving artifacts
   -------------------------------------
   > Total cost:          0.08893498 ETH


2_deploy_ico_only.js
====================
   -------------------------------------
   > Total cost:                   0 ETH


Summary
=======
> Total deployments:   3
> Final cost:          0.08893498 ETH

```