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

    Good[100] public goods;
    uint public num;
    mapping(address => uint) public bal;

    function Shop() payable public {
        num = 0;
    }


    function createGood(uint price) public returns (uint){
        goods[num].id = num;
        goods[num].owner = msg.sender;
        goods[num].price = price;
        goods[num].state = 0;
        goods[num].money = 0;
        num ++;
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
        Good storage goodgood = goods[id];
        return (goodgood.id,goodgood.owner,goodgood.buyer,goodgood.price,goodgood.state,goodgood.money);
    }
}
