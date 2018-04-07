let tb = require('./touchBlocks.js');

console.log(tb.createGood(8,10*tb.ether));
console.log(tb.createGood(1,6*tb.ether));
console.log(tb.createGood(3,4*tb.ether));
console.log(tb.createGood(7,3*tb.ether));

tb.buy(3,0,10*tb.ether);
tb.buy(4,1,7*tb.ether);
tb.buy(5,2,4*tb.ether);
tb.buy(6,3,8*tb.ether);

tb.accept(3,0);
tb.accept(4,1);
tb.ret(5,2);
tb.ret(6,3);

tb.getback(5);
tb.getback(6);
tb.getback(1);
tb.getback(8);
tb.getback(3);
tb.getback(7);

console.log(tb.createGood(2,0.6*tb.ether));
console.log(tb.createGood(9,1.7*tb.ether));
console.log(tb.createGood(0,2.8*tb.ether));
console.log(tb.createGood(4,4.4*tb.ether));

tb.buy(1,4,0.6*tb.ether);
tb.buy(2,5,1.7*tb.ether);
tb.buy(3,6,2.8*tb.ether);
tb.buy(0,7,4.4*tb.ether);

tb.accept(1,4);
tb.accept(2,5);
tb.accept(3,6);
tb.accept(0,7);

tb.getback(2);
tb.getback(9);
tb.getback(0);
tb.getback(4);

console.log(tb.createGood(3,0.02*tb.ether));
console.log(tb.createGood(2,0.03*tb.ether));
console.log(tb.createGood(5,0.04*tb.ether));
console.log(tb.createGood(1,0.05*tb.ether));

console.log(tb.getall());
