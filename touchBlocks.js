let Web3 = require('web3');
let web3;
let sol = require('./blockchains/build/contracts/Shop.json');
let ether = 1000000000000000000;

if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));  //for ganache
}
let from = web3.eth.accounts[0];
let address = "0x8da7eb4ec3a4c1291797e13db723f9046aff4a1c"; // for truffle migrate
let abi = sol["abi"];
var Shop = web3.eth.contract(abi).at(address);
let accounts = web3.eth.accounts;


function createGood(user , price) {
    try{
        Shop.createGood(price , {from : web3.eth.accounts[user], gas : 300000});
        return Shop.getNum.call().toString()*1-1;
    } catch(e) {
        return -1;
    }
}

function buy(user , id , price) {
    try{
        Shop.buy(id,{from : web3.eth.accounts[user], value : price, gas : 300000});
        return 0;
    } catch(e) {
        return -1;
    }
}

function accept(user, id) {
    try{
        Shop.acc(id,{from : web3.eth.accounts[user], gas : 300000});
        return 0;
    } catch(e) {
        return -1;
    }
}

function ret(user, id) {
    try{
        Shop.ret(id,{from : web3.eth.accounts[user], gas : 300000});
        return 0;
    } catch(e) {
        return -1;
    }
}

function getback(user) {
    try{
        Shop.getback({from : web3.eth.accounts[user], gas : 300000});
        return 0;
    } catch(e) {
        return -1;
    }
}

function getNum() {
    try{
        return Shop.getNum.call().toString()*1-1;
    } catch(e) {
        return -1;
    }
}

function getall() {
    let n = getNum();
    let ans = []
    for (let i=0;i<=n;i++){
        let tmp = {};
        let answer =  Shop.getGoods.call(i);
        tmp['id'] = answer[0].toNumber();
        //tmp['owner'] = answer[1];
        for (let j=0; j<accounts.length; j++){
            if (answer[1] == accounts[j]) {
                tmp['owner'] = j;
            }
        }
        if (!tmp['owner']) {tmp['owner']=-1;}
        //tmp['buyer'] = answer[2];
        for (let j=0; j<accounts.length; j++){
            if (answer[2] == accounts[j]) {
                tmp['buyer'] = j;
            }
        }
        if (!tmp['buyer']) {tmp['buyer']=-1;}
        tmp['price'] = answer[3].toNumber();
        tmp['state'] = answer[4].toNumber();
        tmp['money'] = answer[5].toNumber();
        ans.push(tmp);
    }
    return ans;
}

exports.createGood = createGood;
exports.buy = buy;
exports.accept = accept;
exports.ret = ret;
exports.getback = getback;
exports.getNum = getNum;
exports.getall = getall;
exports.ether = ether;

/*
console.log(createGood(8,10*ether));
buy(6,0,10*ether);
accept(6,0);
getback(8);
*/