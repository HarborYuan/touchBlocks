let tb = require('./touchBlocks.js');
let http = require('http');
var url = require('url');
 
const hostname = '192.168.43.164';  
const port = 1028;  
  
http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "application/json",
			"Access-Control-Allow-Origin" : "*",
			"Access-Control-Allow-Credentials" : true,
			"Access-Control-Allow-Methods" :  'POST, GET, PUT, DELETE, OPTIONS',
			'Access-Control-Allow-Headers': 'Content-Type'
			});
    var params = url.parse(req.url, true).query;
    let func = params.func;
    let a1 = params.a1;
    let a2 = params.a2;
    let a3 = params.a3;
    var ans;
    if (func === 'createGood') {
        ans = tb.createGood(a1*1,a2*1);
    } else
    if (func === 'buy') {
        ans = tb.buy(a1*1,a2*1,a3*1);
    } else
    if (func === 'accept') {
        ans = tb.accept(a1*1,a2*1);
    } else
    if (func === 'ret') {
        ans = tb.ret(a1*1,a2*1);
    }else
    if (func === 'getback') {
        ans = tb.getback(a1*1);
    }else
    if (func === 'getNum') {
        ans = tb.getNum();
    }else
    if (func === 'getall') {
        ans = tb.getall();
    }else
    if (func === 'change') {
        ans = tb.change(a1*1,a2*1,a3*1);
    }else
    if (func === 'createGood') {
        ans = tb.createGood(a1*1,a2*1);
    }

    var json = JSON.stringify({
        ans: ans
    });   
    res.end(json);
}).listen(port, hostname, () => {  
  console.log(`Server running at http://${hostname}:${port}/`);  
});  
