import {generateAddresses, createWallet} from './generate'; 
import { createSweepTx, distributeTokenTx} from './createRawTx'
import {signTx, signTxHD} from './signTx'
import {sendTransaction} from './sendTx'
import {instantiatedWeb3} from './initWeb3'
import * as config from '../config/config'
import * as Util from 'ethereumjs-util'
import * as Jsonfile from 'jsonfile'

const Web3 = require('web3')
const web3 = new Web3(config.Web3Provider)


//************TO GENERATE ADDRESSES ****************/
export function createAddresses(num: number){
    saveToJSON(generateAddresses(num,createWallet()), config.addressGenerationJson)
}

// *************CREATE, SIGN, BROADCAST AND WAIT FOR TRANSACTION TO CONFIRM */
// ************************************************************************ */
export async function sweepFunds( sweepingList: {from:string, value:string, derivationPath:string }[] ){
    console.log('Sweeping funds to', sweepingList.length, 'addresses')
    let signedJson: any = []
    let unsignedJson: any = []

    sweepingList.forEach(async (obj, index)=>{
        const fromAddress = obj.from
        const value = Number(obj.value)
        const hdIndex = Number(obj.derivationPath)
    
        const rawTx = await createSweepTx(fromAddress, value)
        unsignedJson.push(rawTx.serialize().toString('hex'))
        const signedTx = '0x'  + await signTxHD(hdIndex,rawTx).serialize().toString('hex')
        signedJson.push(signedTx)
        if(index == sweepingList.length -1){
            console.log('signedTX JSON: ', signedJson)
            console.log('unsignedTX JSON', unsignedJson)
            
            saveToJSON(signedJson, config.signedSweepingTXJson)
            saveToJSON(unsignedJson, config.unsignedSweepingTXJson)

        }
        await sendTransaction(signedTx)

    })
}

export async function distributeTokens (distributionList: {relayAddress:string , numTokens:number} []){
    console.log('distributing  tokens to', distributionList.length, 'users')
    const buferedPrivKey =  Util.toBuffer('0x' + config.deployerPrivKey)
    let json: any = []
    //gets nonce when script is run , we increment within the loop. 
    const initalNonce = await instantiatedWeb3.eth.getTransactionCount(config.deployerAddress)
    
    distributionList.forEach(async (obj, index)=>{
        let relayAddress = obj.relayAddress
        let numTokens = obj.numTokens
        let rawTx = await distributeTokenTx(relayAddress, numTokens, initalNonce + index)
        let signedTx =  '0x' + await signTx(buferedPrivKey,rawTx).serialize().toString('hex')
        
        json.push(signedTx)
        if(index == distributionList.length -1){
            console.log('signedTX JSON: ', json)
            saveToJSON(json, config.signedDistributionTXJson)
        }
        await sendTransaction(signedTx)

    })
}
    

export function saveToJSON(json: any, filename: string): any{

    Jsonfile.writeFile(filename, json, 'utf8', (err: any, content: any) => {
        if(err) {console.log(err); return err}
        
          console.log("Wrote", filename)
          return 
      })
  
}

