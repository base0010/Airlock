
#Prerequisites: 
Node.js
Yarn
Noderize

#General: 
This is a suite of tools that can be used to run a token sale on a traditional-DB backed platform, comprised of ETH account generation,transaction generation and transaction signing (done on a airgapped machine)


#HD Address generator: 

##Motivation: 
To create tools that allow a platform to create 'x' number of derrived Ethereum addresses from an HD xpub and output to a JSON file to be used to seed a database with user accounts.
###Configuration: 
-define 'xPubKey' in config.ts
-define 'numAddresses' in config.ts to create (>=100000)
-define the JSON file to save to 'addressGenerationJson'

#ETH Fund Sweeping Transaction Genration:
##Motivation: 
To generate (raw) Ethereum transactions that will sweep funds from 'x' number of HD derrived accounts of which the enduser owns the xpriv into a single Ethereum multisig address [many-to-one]
##Configuration: 
-define the Multisig contract address 'sweepAddress'
-define the JSON file path to import the sweeping transactions 'unsignedSweepingTXJson', 

JSON FORMAT: 
{"from":"0x91032d823bdd04d1d51914787f3ce3ab8196809e","value":"5742021449483180","derivationPath":"1"}

Where 'from' is the address being swept, 'value' is the address' value in Wei and 'derrivationPath' is the BIP 44 path "m/44'/60'/0'/x"

#ETH Token Distribution Transaction Generation:
##Motivation:
To generate (raw) Ethereum transactions that will distribute tokens funds to 'x' number of non-custodial token relay addresses (following Human Standard token methods)
-define the ABI file location for the token contract 'HSToken'
-define the deployed contract [HSToken] address           'tokenContractAddress'
-define the ETH public address of the entity who deployed the token contract 'deployerAddress'
-define the location of the unsigned token distribution transaction JSON 'unsignedDistributionTXJson'

#ETH Transaction Signing (Airgap)
#BE SUPER CAREFUL !!!!
##Motivation:
-Create an airgapped machine using best practices
-Generate an xpub/xpriv keypair using safe methods 
    define 'xPrivKey'
-Create a standarad ETH pub/priv keypair
    define 'deployerPrivKey' (this will be the address that deploys the token contract)
-define the signed transaction JSON files 'signedDistributionTXJson' & 'signedSweepingTXJson'

***NOTE: This application does not include optimization and seperation of concerns in the opensource version as such as a development tool the application will attempt to broadcast transactions immidiately after signing, however this should NOT be the case in a deployed environment as the Airgapped machine should NEVER be able to broadcast/talk to the internet, a seperate node (geth/parity) or machine connected to INFURA et. al should be used

