// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import './ERC20.sol';
import './SafeMath.sol';

contract Token is ERC20 {
  using SafeMath for uint;
  address public admin;
  address public ico;
  uint public maxTotalSupply;

  constructor(
    string memory name, 
    string memory symbol,
    uint _maxTotalSupply
  ) ERC20(name, symbol) {
    admin = msg.sender;
    maxTotalSupply = _maxTotalSupply;
  }

  function updateAdmin(address newAdmin) external {
    require(msg.sender == admin, 'only admin');
    admin = newAdmin;
  }

  function updateICO(address newICO) external {
    require(msg.sender == admin, 'only admin');
    ico = newICO;
  }

  function mint(address account, uint256 amount) external {
    require(msg.sender == ico, 'only ICO');
    uint totalSupply = totalSupply();
    require(
      totalSupply.add(amount) <= maxTotalSupply, 
      'above maxTotalSupply limit'
    );
    _mint(account, amount);
  }
}