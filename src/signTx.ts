let HDWallet = require('ethereumjs-wallet/hdkey')
let Util = require('ethereumjs-util')
import * as config from '../config/config'
import * as Jsonfile from 'jsonfile'

const wallet = HDWallet.fromExtendedKey(config.xPrivKey)

export function derivePrivKey(HDindex): any{
    const instance = wallet.deriveChild(HDindex)
    console.log('signing with address: ' , '0x' + Util.pubToAddress(instance._hdkey._publicKey, true).toString('hex'))
    const privKey = instance._hdkey._privateKey
    //logout ETH PrivateKey VERY UNSAFE DELETE BEFORE PRODUCTION!!!
    console.log('private key' , privKey.toString('hex'))
    return privKey
}

export function signTxHD(HDindex:number, RawTx): any{
    const privateKey = derivePrivKey(HDindex)  
    RawTx.sign(privateKey)
    console.log('signed serialized TX', '0x' + RawTx.serialize().toString('hex'))
    return RawTx
}

export  function signTx(privateKey: string, RawTx): any{
    RawTx.sign(privateKey)
    console.log('signed serialized TX', '0x' + RawTx.serialize().toString('hex'))
    return  RawTx
    
}


