import * as HDKey from 'ethereumjs-wallet/hdkey'
import * as Utils from 'ethereumjs-util'
import * as config from '../config/config'



export function createWallet(): any{
    
            let HDWallet = HDKey.fromExtendedKey(config.xPubKey)
            return HDWallet
}

export function generateAddresses(numAddresses: number, HDWallet: any): any{

            let json: any = []
            let runs: number = 1
            let maxAddressesPerTheread: number = config.maxAddressesPerThread
                
                if(numAddresses > maxAddressesPerTheread)
                    runs = numAddresses / maxAddressesPerTheread
                    //mod math needs to go here
                for(var j = 1; j <= runs; j++){
                    for(var i = 0; i < maxAddressesPerTheread; i++){
                        let childPath =  HDWallet.deriveChild(i)
                        let publicKeyBuffer = childPath._hdkey._publicKey
                        let checksumAddress = Utils.bufferToHex(Utils.pubToAddress(publicKeyBuffer, true))
                        let HDString = i.toString()
                        let addr = {address:checksumAddress, currency:2, derivationPath: HDString}
                        json.push(addr)
                    }
                }
                console.log('generating addressses')
                console.log(json)
                return json
}

