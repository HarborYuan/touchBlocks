pragma solidity ^0.4.17;

contract Shop {
    struct Good{
        uint id;
        address owner;
        address buyer;
        uint price;
        uint state;
        uint money;
    }

    Good[] public goods;
    uint public num;
    mapping(address => uint) public bal;

    function Shop() payable public {
        num = 0;
    }

    event coming(uint,uint,uint256);

    function createGood(uint price) public returns (uint){
        goods.push(Good({
            id : num,
            owner : msg.sender,
            buyer : 0,
            price : price,
            state : 0,
            money : 0
        }));
        num ++;
        emit coming(num-1,price,now);
        return num-1;
    }

    function buy(uint id) payable public {
        require(goods[id].owner != msg.sender);
        require(msg.value >= goods[id].price);
        require(goods[id].state == 0);
        goods[id].state = 1;
        goods[id].money = msg.value;
        goods[id].buyer = msg.sender;
    }

    function acc(uint id) public {
        require(goods[id].buyer == msg.sender);
        require(goods[id].state == 1);
        bal[goods[id].owner] += goods[id].money;
        goods[id].state = 2;
    }

    function ret(uint id) public {
        require(goods[id].buyer == msg.sender);
        require(goods[id].state == 1);
        bal[goods[id].buyer] += goods[id].money;
        goods[id].state = 3;
    }

    function getback() public returns (bool) {
        uint amount = bal[msg.sender];
        if (amount > 0) {
            bal[msg.sender] = 0;
            if (!msg.sender.send(amount)) {
                bal[msg.sender] = amount;
                return false;
            }
        }
        return true;
    }

    function getNum() public returns (uint) {
        return num;
    }

    function getGoods(uint id) public returns (uint,address,address,uint,uint,uint) {
        require(id <= num);
        Good storage goodgood = goods[id];
        return (goodgood.id,goodgood.owner,goodgood.buyer,goodgood.price,goodgood.state,goodgood.money);
    }

    function change(uint id, uint price) public {
        require(goods[id].owner == msg.sender);
        require(price > 0);
        goods[id].price = price;
        emit coming(id,price,now);
    }
}
