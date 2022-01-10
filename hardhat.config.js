require('dotenv').config();

require("@nomiclabs/hardhat-ethers");
/*const { API_URL, PRIVATE_KEY } = process.env;*/
API_URL = "https://eth-ropsten.alchemyapi.io/v2/Xo6fgPZsmGGV5mVO233zf3odGgjS_ab6"
PRIVATE_KEY = "565526aaf76e11211aa9b6a2f76fcb257dc4d367f2cd1c2735be475d0dfee1d8"

/**
* @type import('hardhat/config').HardhatUserConfig
*/
module.exports = {
   solidity: "0.7.3",
   defaultNetwork: "ropsten",
   networks: {
      hardhat: {},
      ropsten: {
         url: API_URL,
         accounts: [`0x${PRIVATE_KEY}`]
      }
   },
}
