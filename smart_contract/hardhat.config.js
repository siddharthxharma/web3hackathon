require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://bsc-testnet-dataseed.bnbchain.org',
      accounts: ['716a0eedac490c7ba60fbe66d03d857dd193589d45d3b1a3cb95162f70559da6'],
    },
  },
};