/* eslint-disable no-undef */
const FlashpointNFT = artifacts.require('FlashpointNFT')

module.exports = async (deployer) => {
  const accounts = await web3.eth.getAccounts()

  await deployer.deploy(FlashpointNFT, 'Flashpoint NFTs', 'FNT', 10, accounts[1])
}