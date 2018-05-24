import {instantiatedWeb3} from './initWeb3'


export  async function sendTransaction(signedRawTx): Promise<any>{
    
    let promiEvent = instantiatedWeb3.eth.sendSignedTransaction(signedRawTx, (error, result)=>{
   //lets fucking break e,r callback convention here, just cause...smh
    if(error){
        console.log(error)
        //do some actual error logging
    }
    else
        console.log('We broadcast the Transaction!, txHash: ', result)
        
    })

    let tx_reciept = await promiEvent.on('receipt').then((txReceipt, err)=>{
    if(err){
        console.log('dont know it it made it to a block but we made it this far, add txHash to the db and check later'); return; }
    else
        {console.log('Transaction made it into a block! ', 'txIndex', txReceipt.transactionIndex);

    return new Promise((resolve, reject)=>{resolve( tx_reciept)})}
})
}
