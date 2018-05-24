 /********************************************************* */

 //Server Address Generation 
 //Prerequisites
 export const xPubKey: string= 'xpub6DdBrneLakvk2oVgz4e7b19j8ts9ERVuct2SpAXVZisDh4XVeQiDcijCpiheZCG5qsazcs34TztU4zcFwRvea814qfQS8mnd5mRNBLudjyr' 
 //KDF in Javascript can suck so this is where we break it up into multiple runs >= 100000 
 export const numAddresses: number = 100000
 export const maxAddressesPerThread:number = 100000

 //Output
 export const addressGenerationJson: string = './ethaddresses.json'

/********************************************************** */

//Transaction Generation 
//Prerequisites
 export const sweepAddress:string = '0x0000000000000000000000000000000000000000'
 export const relayAddress:string = '0x0000000000000000000000000000000000000000'
 export const chainId:number = 1
 export const deployerAddress: string = '0x8d4d6dd078040f26d3fd2abc31dede775e7c9921'
 export const tokenContractAddress: string = '0x2a5ebb2d8ef55ac4d71c7fbb2e72e8f9e31717a5'
 export const gasPricePadding: number = 0
 export const HSToken: string = '../contractJSON/HumanStandardToken.json'

 //Outputs
 export const unsignedDistributionTXJson: string = './unsigneddisttxs.json'
 export const unsignedSweepingTXJson: string = './unsignedsweepingtxs.json'

/********************************************************* */

//Transaction Signing / AirGapped Machine
//Prerequisites
export const xPrivKey:string = ''
export const deployerPrivKey: string = ''

//Outputs
export const signedDistributionTXJson: string = './signeddisttxs.json'
export const signedSweepingTXJson: string = './signedsweepingtxs.json'

/******************************************************** */

//Transaction Broadcasting 
 export const Web3Provider: string = 'https://mainnet.infura.io/iKBFpdZseWhnroKOwKfj' 
 
 
//EXTRA CONFIGS 
 //Rinkeby
 //  export const chainId:number = 4
 //  //ETH conn. params
 //  export const Web3Provider: string = 'wss://rinkeby.infura.io/ws'
 
 //Mainnet
 // export const chainId:number = 1
 // //ETH conn. params
 // export const Web3Provider: string = 'wss://mainnet.infura.io/ws'
 
 //LocalChain Geth
 //chainId: 1994
 //localhost:8545
 
 //Websockets
 //export const Web3Provider: string = 'ws://127.0.0.1:8546'
 