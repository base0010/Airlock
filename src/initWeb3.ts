import * as config from '../config/config'
const Web3 = require('web3')
export const instantiatedWeb3 = new Web3(config.Web3Provider)