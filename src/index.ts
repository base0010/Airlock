import {sweepFunds,distributeTokens,createAddresses} from './airlock'


//Example of JSON Schemas

let sweepingObjs = [{"from":"0x91032d823bdd04d1d51914787f3ce3ab8196809e","value":"5742021449483180","derivationPath":"1"},
                {"from":"0x9908b4a736e2aee9acdbe14cd4a49c375c3a94a9","value":"5742021449483180","derivationPath":"0"}]

let distributeOjbs = [{"relayAddress":"0x91032d823bdd04d1d51914787f3ce3ab8196809e", "numTokens": 1000}, {"relayAddress":"0x91032d823bdd04d1d51914787f3ce3ab8196809e", "numTokens": 1000}, {"relayAddress":"0x9908b4a736e2aee9acdbe14cd4a49c375c3a94a9", "numTokens": 10000},{"relayAddress":"0x91032d823bdd04d1d51914787f3ce3ab8196809e", "numTokens": 1000}, {"relayAddress":"0x91032d823bdd04d1d51914787f3ce3ab8196809e", "numTokens": 1000}, {"relayAddress":"0x9908b4a736e2aee9acdbe14cd4a49c375c3a94a9", "numTokens": 10000},{"relayAddress":"0x91032d823bdd04d1d51914787f3ce3ab8196809e", "numTokens": 1000}, {"relayAddress":"0x91032d823bdd04d1d51914787f3ce3ab8196809e", "numTokens": 1000}, {"relayAddress":"0x9908b4a736e2aee9acdbe14cd4a49c375c3a94a9", "numTokens": 10000},{"relayAddress":"0x91032d823bdd04d1d51914787f3ce3ab8196809e", "numTokens": 1000}, {"relayAddress":"0x91032d823bdd04d1d51914787f3ce3ab8196809e", "numTokens": 1000}, {"relayAddress":"0x9908b4a736e2aee9acdbe14cd4a49c375c3a94a9", "numTokens": 10000},{"relayAddress":"0x91032d823bdd04d1d51914787f3ce3ab8196809e", "numTokens": 1000}, {"relayAddress":"0x91032d823bdd04d1d51914787f3ce3ab8196809e", "numTokens": 1000}, {"relayAddress":"0x9908b4a736e2aee9acdbe14cd4a49c375c3a94a9", "numTokens": 10000},{"relayAddress":"0x91032d823bdd04d1d51914787f3ce3ab8196809e", "numTokens": 1000}, {"relayAddress":"0x91032d823bdd04d1d51914787f3ce3ab8196809e", "numTokens": 1000}, {"relayAddress":"0x9908b4a736e2aee9acdbe14cd4a49c375c3a94a9", "numTokens": 10000},{"relayAddress":"0x91032d823bdd04d1d51914787f3ce3ab8196809e", "numTokens": 1000}, {"relayAddress":"0x91032d823bdd04d1d51914787f3ce3ab8196809e", "numTokens": 1000}, {"relayAddress":"0x9908b4a736e2aee9acdbe14cd4a49c375c3a94a9", "numTokens": 10000},{"relayAddress":"0x91032d823bdd04d1d51914787f3ce3ab8196809e", "numTokens": 1000}, {"relayAddress":"0x91032d823bdd04d1d51914787f3ce3ab8196809e", "numTokens": 1000}, {"relayAddress":"0x9908b4a736e2aee9acdbe14cd4a49c375c3a94a9", "numTokens": 10000}
]

//sweepFunds(sweepingObjs)
//createAddresses(1000000)
distributeTokens(distributeOjbs)


