const Token = artifacts.require('Token');
const ICO = artifacts.require('ICO');
const DaiToken = artifacts.require('DaiToken');

module.exports = async function (deployer) {
  const totalSupply = '10000000'; //10M
  const availableTokens = '5000000'; //5M
  await deployer.deploy(
    Token,
    'SafeDoge',
    'SAFEDOGE',
    web3.utils.toWei(totalSupply)
  );
  const token = await Token.deployed();

  await deployer.deploy(
    DaiToken,
    'SafeUSD',
    'SAFEUSD',
    web3.utils.toWei('90000000000')
  );

  const daiToken = await DaiToken.deployed();

  await deployer.deploy(
    ICO,
    token.address,
    daiToken.address,
    592200,                         // duration (592200s = 1 week)
    web3.utils.toWei('2', 'milli'), // price of 1 token in DAI (wei) (= 0.002 DAI. 0.002 * 10M = 20,000 DAI ~= 20,000 USD)
    web3.utils.toWei(availableTokens), //_availableTokens for the ICO. can be less than maxTotalSupply
    200,                            //_minPurchase (in DAI)
    5000                            //_maxPurchase (in DAI)
  );
  const ico = await ICO.deployed();
  await token.updateAdmin(ico.address);
  await ico.start();
};