import * as EthTx from 'ethereumjs-tx'
import * as config from '../config/config'
import {instantiatedWeb3} from './initWeb3'


export interface Tx {
    nonce: number,
    gas: number
    gasPrice: number,
    to: string,
    value: number, 
    data: string, 
    chainId: number, 
    
}
//TX generation helper functions
export async function getAccountNonce(account: string): Promise<any> {
    let accountNonce =  await instantiatedWeb3.eth.getTransactionCount(account)
    return accountNonce
}

export async function getLastGasPrice(): Promise<any>{
    let gasPrice =  await instantiatedWeb3.eth.getGasPrice()
    return gasPrice
}


export async function createSweepTx(from:string ,value:number): Promise<any>{
    //this should realistically always be 0, because we own the account but in the future might be more if we have to sweep multiple times AKA end user sent more ETH and shouldn't have
    let reportedNonce = await instantiatedWeb3.eth.getTransactionCount(from)
    let lastBlockGasPrice = await getLastGasPrice()
    let gasPriceNumber = Number(lastBlockGasPrice)
    
    const plaintextTx: Tx= { 
                              nonce: reportedNonce,
                              gas: 21476,
                              gasPrice: gasPriceNumber,
                              to: config.sweepAddress,
                              value: 10000,
                              data: '',
                              chainId: config.chainId
                            }
   
    console.log('the nonce for the tx is' , plaintextTx.nonce)
    console.log('Last block gas price in Wei', plaintextTx.gasPrice)
    const rawTx:any = new EthTx(plaintextTx)
    console.log('raw ETH tx ' + rawTx.serialize().toString('hex'))
    return new Promise((resolve, reject)=>{resolve(rawTx)}) 

}

export async function distributeTokenTx(relayAddress: string, amount: number,  _nonce: number): Promise<any>{

    const tokenAdministratorAddress = config.deployerAddress
 
    let TokenContract = new instantiatedWeb3.eth.Contract(config.HSToken.abi, config.tokenContractAddress,{from: config.deployerAddress} )

    //the actor address allowed to transfer tokens
    let lastBlockGasPrice = await instantiatedWeb3.eth.getGasPrice().then((gasPrice) => {return gasPrice})
    let gasPriceNumber = Number(lastBlockGasPrice)

    console.log('method', TokenContract.methods.transfer(relayAddress, amount).encodeABI())
    const plaintextTx: Tx = { 
                              nonce: _nonce,
                              //BN here
                              gas: 100000 ,
                              gasPrice: gasPriceNumber + config.gasPricePadding,
                              to: config.tokenContractAddress,
                              value: 0,
                              data: TokenContract.methods.approveAndCall(relayAddress, amount, '0x00').encodeABI() ,
                              chainId: config.chainId
                            }

    console.log('the nonce for the tx is' , plaintextTx.nonce)
    console.log('Last block gas price in Wei', plaintextTx.gasPrice)
    const rawTx:any = new EthTx(plaintextTx)

    console.log('raw ETH tx ' + rawTx.serialize().toString('hex'))  
    
    return new Promise((resolve, reject)=>{resolve(rawTx)})

    
    
}