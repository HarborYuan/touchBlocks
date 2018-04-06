# touchblocks.js 文档
## import
    let tb = require('./touchBlocks.js');

## const
    tb.ether = 1000000000000000000; // 1 Ether

## Create
    tb.createGood(8,10*tb.ether); // user 8 创建了一个价格为10 Ether的商品
    // 如果成功，返回商品id，如果失败返回-1

## buy
    tb.buy(6,0,10*tb.ether); // user 6 想要买商品0，并支付10 Ether
    // 如果成功，返回0，如果失败返回-1

## accept
    tb.accept(6,0); // user 6 表示收到商品0,钱回在合约中存在商品持有者的账户上
    // 如果成功，返回0，如果失败返回-1

## 退款
    tb.ret(6,0); // user 6 表示不想要商品0,希望退款。钱会退到合约中
    // 如果成功，返回0，如果失败返回-1

## 收回以太币
    tb.getback(6); // user 6 希望收回在合约中的钱。
    // 如果成功，返回0，如果失败返回-1

## 读取所有商品信息
    tb.getall(); // 返回所有商品
    [ 
        { 
            id: 0,                          //商品 id
            owner: 8,                       //商品卖家
            buyer: 6,                       //商品买家
            price: 10000000000000000000,    //商品及格
            state: 1,                       //商品状态
            money: 10000000000000000000     //买家付钱
        } 
    ]

