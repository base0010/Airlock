### AirLock: A suite of tools that can be used to run a token sale on a traditional-DB backed platform

#### Prerequisites: 
Node.js, 
Yarn,
Noderize


**Features: **
- Bulk Ethereum account generation (from HD xpub)
- Bulk Sweeping (to Multisig) raw transaction generation
- Bulk Token Distribution raw transaction generation 
- Airgap transaction signing

**All configuration variables are located in config.ts
**
#### HD Address generation:

##### Motivation:
To create tools that allow a platform to create 'x' number of derrived Ethereum addresses from an HD xpub and output to a JSON file to be used to seed a database with user accounts.
### Configuration: 
- define **xPubKey** in config.ts 
- define **numAddresses** in config.ts to create (>=100000) 
- define the JSON file to save to **addressGenerationJson**

#### ETH Fund Sweeping Transaction Genration: 
##### Motivation:
To generate (raw) Ethereum transactions that will sweep funds from 'x' number of HD derrived accounts of which the enduser owns the xpriv into a single Ethereum multisig address [many-to-one] 
### Configuration: 
- define the Multisig contract address **sweepAddress**
- define the JSON file path to import the sweeping transactions **unsignedSweepingTXJson**

> JSON Format: {"from":"0x91032d823bdd04d1d51914787f3ce3ab8196809e","value":"5742021449483180","derivationPath":"1"}

Where **'from'** is the address being swept, **'value'** is the address' value in Wei and **'derrivationPath'** is the Ethereum BIP44 path "m/44'/60'/0'/**x**"

#### ETH Token Distribution Transaction Generation: 
##### Motivation:
To generate (raw) Ethereum transactions that will distribute tokens funds to 'x' number of non-custodial token relay addresses (following Human Standard token methods) 
- define the ABI file location for the token contract '**HSToken**' 
- define the deployed contract [HSToken] address '**tokenContractAddress**' 
- define the ETH public address of the entity who deployed the token contract '**deployerAddress**'
- define the location of the unsigned token distribution transaction JSON '**unsignedDistributionTXJson**'

#### ETH Transaction Signing (Airgap) 
# BE  CAREFUL USE PROPER OPERATIONAL SECURITY WHEN DEALING WITH PRIVATE KEYS !!!!
##### Motivation: 
Use an airgapped machine to sign Ethereum transactions
###### Steps:
- Create an airgapped machine using best practices 
- Generate an xpub/xpriv keypair using safe methods, define '**xPrivKey**' 
- Create a standarad ETH pub/priv keypair define '**deployerPrivKey**' (this will be the address that deploys the token contract) 
- define the signed transaction JSON files '**signedDistributionTXJson**' & '**signedSweepingTXJson**'

*** NOTE: This application does not include optimization and seperation of concerns and has been cleansed of proprietary information and features,  as such it should only be used as a development tool. Furthermore, the application will attempt to broadcast transactions immidiately after signing. It should be noted however this should NOT be the case in a production environment as the Airgapped machine should NEVER be able to broadcast/talk to the internet, a seperate node (geth/parity) or machine connected to INFURA et. al should be used