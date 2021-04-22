const Token = artifacts.require('Token');
const ICO = artifacts.require('ICO');
const DaiToken = artifacts.require('DaiToken');

module.exports = async function (deployer) {
    // const token = await Token.at('0xE8f0D78A1140307bd2D7d3427d2166a849E5bfc8');
    // const daiToken = await DaiToken.at('0x92410Af03f3B749f689984b25453b8e23452b57C');
    // const availableTokensForICO = '5000000'; //5M

    // await deployer.deploy(
    //     ICO,
    //     token.address,
    //     daiToken.address,
    //     592200,  // duration (592200s = 1 week)
    //     web3.utils.toWei('0.5'), // price of 1 token: 0.5 DAI for per token
    //     web3.utils.toWei(availableTokensForICO), //_availableTokens for the ICO. can be less than maxTotalSupply
    //     web3.utils.toWei('10'), //_minPurchase (in DAI)
    //     web3.utils.toWei('50000'), //_maxPurchase (in DAI)
    // );
    // const ico = await ICO.deployed();
    // // await token.updateAdmin(ico.address);
    // await ico.start();
};