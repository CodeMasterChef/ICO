const Token = artifacts.require('Token');

contract('Token', () => {
  let token = null;

  before(async () => {
    token = await Token.deployed();
})
  it('Should deploy smart contract properly', async () => {
    console.log(token.address);
    assert(token.address != '');
  })
})