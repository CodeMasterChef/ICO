const ICO = artifacts.require('ICO');

contract('ICO', () => {
  it('Should deploy smart contract properly', async () => {
    const ico = await ICO.deployed();
    console.log(ico.address);
    assert(ico.address != '');
  })
})