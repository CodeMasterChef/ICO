const ICO = artifacts.require('ICO');

contract('ICO', () => {
  let ico = null;
  before(async () => {
    ico = await ICO.deployed();
})
  it('Should deploy smart contract properly', async () => {
    console.log(ico.address);
    assert(ico.address != '');
  })
  it('Should have avaible tokens for ICO', async () => {
    let availableTokens = await ico.availableTokens();
    availableTokens = availableTokens.toString();
    console.log("availableTokens ", availableTokens);
    assert(web3.utils.fromWei(availableTokens , 'ether') == '5000000');
  })
})