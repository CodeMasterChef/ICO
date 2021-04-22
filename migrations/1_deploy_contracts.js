const Token = artifacts.require('Token');
const ICO = artifacts.require('ICO');
const DaiToken = artifacts.require('DaiToken');

module.exports = async function (deployer) {
  const tokenTotalSupply = '10000000'; //10M
  const daiTotalSupply = '90000000000'; //90B
  const availableTokensForICO = '5000000'; //5M

  await deployer.deploy(
    Token,
    'SafeDoge',
    'SAFEDOGE',
    web3.utils.toWei(tokenTotalSupply)
  );
  const token = await Token.deployed();

  await deployer.deploy(
    DaiToken,
    'SafeUSD',
    'SAFEUSD',
    web3.utils.toWei(daiTotalSupply)
  );

  const daiToken = await DaiToken.deployed();

  await deployer.deploy(
    ICO,
    token.address,
    daiToken.address,
    592200,  // duration (592200s = 1 week)
    web3.utils.toWei('0.5'), // price of 1 token: 0.5 DAI for per token
    web3.utils.toWei(availableTokensForICO), //_availableTokens for the ICO. can be less than maxTotalSupply
    web3.utils.toWei('10'), //_minPurchase (in DAI)
    web3.utils.toWei('5000'), //_maxPurchase (in DAI)
  );
  const ico = await ICO.deployed();
  await token.updateICO(ico.address);
  await ico.start();
};