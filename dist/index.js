(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["airlock"] = factory();
	else
		root["airlock"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************* */
Object.defineProperty(exports, "__esModule", { value: true });
//Server Address Generation 
//Prerequisites
exports.xPubKey = 'xpub6DdBrneLakvk2oVgz4e7b19j8ts9ERVuct2SpAXVZisDh4XVeQiDcijCpiheZCG5qsazcs34TztU4zcFwRvea814qfQS8mnd5mRNBLudjyr';
//KDF in Javascript can suck so this is where we break it up into multiple runs >= 100000 
exports.numAddresses = 100000;
exports.maxAddressesPerThread = 100000;
//Output
exports.addressGenerationJson = './ethaddresses.json';
/********************************************************** */
//Transaction Generation 
//Prerequisites
exports.sweepAddress = '0x0000000000000000000000000000000000000000';
exports.relayAddress = '0x0000000000000000000000000000000000000000';
exports.chainId = 1;
exports.deployerAddress = '0x8d4d6dd078040f26d3fd2abc31dede775e7c9921';
exports.tokenContractAddress = '0x2a5ebb2d8ef55ac4d71c7fbb2e72e8f9e31717a5';
exports.gasPricePadding = 0;
exports.HSToken = '../contractJSON/HumanStandardToken.json';
//Outputs
exports.unsignedDistributionTXJson = './unsigneddisttxs.json';
exports.unsignedSweepingTXJson = './unsignedsweepingtxs.json';
/********************************************************* */
//Transaction Signing / AirGapped Machine
//Prerequisites
exports.xPrivKey = '';
exports.deployerPrivKey = '';
//Outputs
exports.signedDistributionTXJson = './signeddisttxs.json';
exports.signedSweepingTXJson = './signedsweepingtxs.json';
/******************************************************** */
//Transaction Broadcasting 
exports.Web3Provider = 'https://mainnet.infura.io/iKBFpdZseWhnroKOwKfj';
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


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("ethereumjs-util");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var config = __webpack_require__(0);
var Web3 = __webpack_require__(4);
exports.instantiatedWeb3 = new Web3(config.Web3Provider);


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("ethereumjs-wallet/hdkey");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("web3");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var airlock_1 = __webpack_require__(7);
//Example of JSON Schemas
var sweepingObjs = [{ "from": "0x91032d823bdd04d1d51914787f3ce3ab8196809e", "value": "5742021449483180", "derivationPath": "1" },
    { "from": "0x9908b4a736e2aee9acdbe14cd4a49c375c3a94a9", "value": "5742021449483180", "derivationPath": "0" }];
var distributeOjbs = [{ "relayAddress": "0x91032d823bdd04d1d51914787f3ce3ab8196809e", "numTokens": 1000 }, { "relayAddress": "0x91032d823bdd04d1d51914787f3ce3ab8196809e", "numTokens": 1000 }, { "relayAddress": "0x9908b4a736e2aee9acdbe14cd4a49c375c3a94a9", "numTokens": 10000 }, { "relayAddress": "0x91032d823bdd04d1d51914787f3ce3ab8196809e", "numTokens": 1000 }, { "relayAddress": "0x91032d823bdd04d1d51914787f3ce3ab8196809e", "numTokens": 1000 }, { "relayAddress": "0x9908b4a736e2aee9acdbe14cd4a49c375c3a94a9", "numTokens": 10000 }, { "relayAddress": "0x91032d823bdd04d1d51914787f3ce3ab8196809e", "numTokens": 1000 }, { "relayAddress": "0x91032d823bdd04d1d51914787f3ce3ab8196809e", "numTokens": 1000 }, { "relayAddress": "0x9908b4a736e2aee9acdbe14cd4a49c375c3a94a9", "numTokens": 10000 }, { "relayAddress": "0x91032d823bdd04d1d51914787f3ce3ab8196809e", "numTokens": 1000 }, { "relayAddress": "0x91032d823bdd04d1d51914787f3ce3ab8196809e", "numTokens": 1000 }, { "relayAddress": "0x9908b4a736e2aee9acdbe14cd4a49c375c3a94a9", "numTokens": 10000 }, { "relayAddress": "0x91032d823bdd04d1d51914787f3ce3ab8196809e", "numTokens": 1000 }, { "relayAddress": "0x91032d823bdd04d1d51914787f3ce3ab8196809e", "numTokens": 1000 }, { "relayAddress": "0x9908b4a736e2aee9acdbe14cd4a49c375c3a94a9", "numTokens": 10000 }, { "relayAddress": "0x91032d823bdd04d1d51914787f3ce3ab8196809e", "numTokens": 1000 }, { "relayAddress": "0x91032d823bdd04d1d51914787f3ce3ab8196809e", "numTokens": 1000 }, { "relayAddress": "0x9908b4a736e2aee9acdbe14cd4a49c375c3a94a9", "numTokens": 10000 }, { "relayAddress": "0x91032d823bdd04d1d51914787f3ce3ab8196809e", "numTokens": 1000 }, { "relayAddress": "0x91032d823bdd04d1d51914787f3ce3ab8196809e", "numTokens": 1000 }, { "relayAddress": "0x9908b4a736e2aee9acdbe14cd4a49c375c3a94a9", "numTokens": 10000 }, { "relayAddress": "0x91032d823bdd04d1d51914787f3ce3ab8196809e", "numTokens": 1000 }, { "relayAddress": "0x91032d823bdd04d1d51914787f3ce3ab8196809e", "numTokens": 1000 }, { "relayAddress": "0x9908b4a736e2aee9acdbe14cd4a49c375c3a94a9", "numTokens": 10000 }
];
//sweepFunds(sweepingObjs)
//createAddresses(1000000)
airlock_1.distributeTokens(distributeOjbs);


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var generate_1 = __webpack_require__(8);
var createRawTx_1 = __webpack_require__(9);
var signTx_1 = __webpack_require__(11);
var sendTx_1 = __webpack_require__(12);
var initWeb3_1 = __webpack_require__(2);
var config = __webpack_require__(0);
var Util = __webpack_require__(1);
var Jsonfile = __webpack_require__(13);
var Web3 = __webpack_require__(4);
var web3 = new Web3(config.Web3Provider);
//************TO GENERATE ADDRESSES ****************/
function createAddresses(num) {
    saveToJSON(generate_1.generateAddresses(num, generate_1.createWallet()), config.addressGenerationJson);
}
exports.createAddresses = createAddresses;
// *************CREATE, SIGN, BROADCAST AND WAIT FOR TRANSACTION TO CONFIRM */
// ************************************************************************ */
function sweepFunds(sweepingList) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        var signedJson, unsignedJson;
        return __generator(this, function (_a) {
            console.log('Sweeping funds to', sweepingList.length, 'addresses');
            signedJson = [];
            unsignedJson = [];
            sweepingList.forEach(function (obj, index) { return __awaiter(_this, void 0, void 0, function () {
                var fromAddress, value, hdIndex, rawTx, signedTx, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            fromAddress = obj.from;
                            value = Number(obj.value);
                            hdIndex = Number(obj.derivationPath);
                            return [4 /*yield*/, createRawTx_1.createSweepTx(fromAddress, value)];
                        case 1:
                            rawTx = _b.sent();
                            unsignedJson.push(rawTx.serialize().toString('hex'));
                            _a = '0x';
                            return [4 /*yield*/, signTx_1.signTxHD(hdIndex, rawTx).serialize().toString('hex')];
                        case 2:
                            signedTx = _a + (_b.sent());
                            signedJson.push(signedTx);
                            if (index == sweepingList.length - 1) {
                                console.log('signedTX JSON: ', signedJson);
                                console.log('unsignedTX JSON', unsignedJson);
                                saveToJSON(signedJson, config.signedSweepingTXJson);
                                saveToJSON(unsignedJson, config.unsignedSweepingTXJson);
                            }
                            return [4 /*yield*/, sendTx_1.sendTransaction(signedTx)];
                        case 3:
                            _b.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
            return [2 /*return*/];
        });
    });
}
exports.sweepFunds = sweepFunds;
function distributeTokens(distributionList) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        var buferedPrivKey, json, initalNonce;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('distributing  tokens to', distributionList.length, 'users');
                    buferedPrivKey = Util.toBuffer('0x' + config.deployerPrivKey);
                    json = [];
                    return [4 /*yield*/, initWeb3_1.instantiatedWeb3.eth.getTransactionCount(config.deployerAddress)];
                case 1:
                    initalNonce = _a.sent();
                    distributionList.forEach(function (obj, index) { return __awaiter(_this, void 0, void 0, function () {
                        var relayAddress, numTokens, rawTx, signedTx, _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    relayAddress = obj.relayAddress;
                                    numTokens = obj.numTokens;
                                    return [4 /*yield*/, createRawTx_1.distributeTokenTx(relayAddress, numTokens, initalNonce + index)];
                                case 1:
                                    rawTx = _b.sent();
                                    _a = '0x';
                                    return [4 /*yield*/, signTx_1.signTx(buferedPrivKey, rawTx).serialize().toString('hex')];
                                case 2:
                                    signedTx = _a + (_b.sent());
                                    json.push(signedTx);
                                    if (index == distributionList.length - 1) {
                                        console.log('signedTX JSON: ', json);
                                        saveToJSON(json, config.signedDistributionTXJson);
                                    }
                                    return [4 /*yield*/, sendTx_1.sendTransaction(signedTx)];
                                case 3:
                                    _b.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    return [2 /*return*/];
            }
        });
    });
}
exports.distributeTokens = distributeTokens;
function saveToJSON(json, filename) {
    Jsonfile.writeFile(filename, json, 'utf8', function (err, content) {
        if (err) {
            console.log(err);
            return err;
        }
        console.log("Wrote", filename);
        return;
    });
}
exports.saveToJSON = saveToJSON;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var HDKey = __webpack_require__(3);
var Utils = __webpack_require__(1);
var config = __webpack_require__(0);
function createWallet() {
    var HDWallet = HDKey.fromExtendedKey(config.xPubKey);
    return HDWallet;
}
exports.createWallet = createWallet;
function generateAddresses(numAddresses, HDWallet) {
    var json = [];
    var runs = 1;
    var maxAddressesPerTheread = config.maxAddressesPerThread;
    if (numAddresses > maxAddressesPerTheread)
        runs = numAddresses / maxAddressesPerTheread;
    //mod math needs to go here
    for (var j = 1; j <= runs; j++) {
        for (var i = 0; i < maxAddressesPerTheread; i++) {
            var childPath = HDWallet.deriveChild(i);
            var publicKeyBuffer = childPath._hdkey._publicKey;
            var checksumAddress = Utils.bufferToHex(Utils.pubToAddress(publicKeyBuffer, true));
            var HDString = i.toString();
            var addr = { address: checksumAddress, currency: 2, derivationPath: HDString };
            json.push(addr);
        }
    }
    console.log('generating addressses');
    console.log(json);
    return json;
}
exports.generateAddresses = generateAddresses;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var EthTx = __webpack_require__(10);
var config = __webpack_require__(0);
var initWeb3_1 = __webpack_require__(2);
//TX generation helper functions
function getAccountNonce(account) {
    return __awaiter(this, void 0, void 0, function () {
        var accountNonce;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, initWeb3_1.instantiatedWeb3.eth.getTransactionCount(account)];
                case 1:
                    accountNonce = _a.sent();
                    return [2 /*return*/, accountNonce];
            }
        });
    });
}
exports.getAccountNonce = getAccountNonce;
function getLastGasPrice() {
    return __awaiter(this, void 0, void 0, function () {
        var gasPrice;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, initWeb3_1.instantiatedWeb3.eth.getGasPrice()];
                case 1:
                    gasPrice = _a.sent();
                    return [2 /*return*/, gasPrice];
            }
        });
    });
}
exports.getLastGasPrice = getLastGasPrice;
function createSweepTx(from, value) {
    return __awaiter(this, void 0, void 0, function () {
        var reportedNonce, lastBlockGasPrice, gasPriceNumber, plaintextTx, rawTx;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, initWeb3_1.instantiatedWeb3.eth.getTransactionCount(from)];
                case 1:
                    reportedNonce = _a.sent();
                    return [4 /*yield*/, getLastGasPrice()];
                case 2:
                    lastBlockGasPrice = _a.sent();
                    gasPriceNumber = Number(lastBlockGasPrice);
                    plaintextTx = {
                        nonce: reportedNonce,
                        gas: 21476,
                        gasPrice: gasPriceNumber,
                        to: config.sweepAddress,
                        value: 10000,
                        data: '',
                        chainId: config.chainId
                    };
                    console.log('the nonce for the tx is', plaintextTx.nonce);
                    console.log('Last block gas price in Wei', plaintextTx.gasPrice);
                    rawTx = new EthTx(plaintextTx);
                    console.log('raw ETH tx ' + rawTx.serialize().toString('hex'));
                    return [2 /*return*/, new Promise(function (resolve, reject) { resolve(rawTx); })];
            }
        });
    });
}
exports.createSweepTx = createSweepTx;
function distributeTokenTx(relayAddress, amount, _nonce) {
    return __awaiter(this, void 0, void 0, function () {
        var tokenAdministratorAddress, TokenContract, lastBlockGasPrice, gasPriceNumber, plaintextTx, rawTx;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    tokenAdministratorAddress = config.deployerAddress;
                    TokenContract = new initWeb3_1.instantiatedWeb3.eth.Contract(config.HSToken.abi, config.tokenContractAddress, { from: config.deployerAddress });
                    return [4 /*yield*/, initWeb3_1.instantiatedWeb3.eth.getGasPrice().then(function (gasPrice) { return gasPrice; })];
                case 1:
                    lastBlockGasPrice = _a.sent();
                    gasPriceNumber = Number(lastBlockGasPrice);
                    console.log('method', TokenContract.methods.transfer(relayAddress, amount).encodeABI());
                    plaintextTx = {
                        nonce: _nonce,
                        //BN here
                        gas: 100000,
                        gasPrice: gasPriceNumber + config.gasPricePadding,
                        to: config.tokenContractAddress,
                        value: 0,
                        data: TokenContract.methods.approveAndCall(relayAddress, amount, '0x00').encodeABI(),
                        chainId: config.chainId
                    };
                    console.log('the nonce for the tx is', plaintextTx.nonce);
                    console.log('Last block gas price in Wei', plaintextTx.gasPrice);
                    rawTx = new EthTx(plaintextTx);
                    console.log('raw ETH tx ' + rawTx.serialize().toString('hex'));
                    return [2 /*return*/, new Promise(function (resolve, reject) { resolve(rawTx); })];
            }
        });
    });
}
exports.distributeTokenTx = distributeTokenTx;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("ethereumjs-tx");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var HDWallet = __webpack_require__(3);
var Util = __webpack_require__(1);
var config = __webpack_require__(0);
var wallet = HDWallet.fromExtendedKey(config.xPrivKey);
function derivePrivKey(HDindex) {
    var instance = wallet.deriveChild(HDindex);
    console.log('signing with address: ', '0x' + Util.pubToAddress(instance._hdkey._publicKey, true).toString('hex'));
    var privKey = instance._hdkey._privateKey;
    //logout ETH PrivateKey VERY UNSAFE DELETE BEFORE PRODUCTION!!!
    console.log('private key', privKey.toString('hex'));
    return privKey;
}
exports.derivePrivKey = derivePrivKey;
function signTxHD(HDindex, RawTx) {
    var privateKey = derivePrivKey(HDindex);
    RawTx.sign(privateKey);
    console.log('signed serialized TX', '0x' + RawTx.serialize().toString('hex'));
    return RawTx;
}
exports.signTxHD = signTxHD;
function signTx(privateKey, RawTx) {
    RawTx.sign(privateKey);
    console.log('signed serialized TX', '0x' + RawTx.serialize().toString('hex'));
    return RawTx;
}
exports.signTx = signTx;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var initWeb3_1 = __webpack_require__(2);
function sendTransaction(signedRawTx) {
    return __awaiter(this, void 0, void 0, function () {
        var promiEvent, tx_reciept;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    promiEvent = initWeb3_1.instantiatedWeb3.eth.sendSignedTransaction(signedRawTx, function (error, result) {
                        //lets fucking break e,r callback convention here, just cause...smh
                        if (error) {
                            console.log(error);
                            //do some actual error logging
                        }
                        else
                            console.log('We broadcast the Transaction!, txHash: ', result);
                    });
                    return [4 /*yield*/, promiEvent.on('receipt').then(function (txReceipt, err) {
                            if (err) {
                                console.log('dont know it it made it to a block but we made it this far, add txHash to the db and check later');
                                return;
                            }
                            else {
                                console.log('Transaction made it into a block! ', 'txIndex', txReceipt.transactionIndex);
                                return new Promise(function (resolve, reject) { resolve(tx_reciept); });
                            }
                        })];
                case 1:
                    tx_reciept = _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.sendTransaction = sendTransaction;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("jsonfile");

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map