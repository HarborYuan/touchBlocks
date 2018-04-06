var Shop = artifacts.require("Shop");
const crumble = "0x0F4F2Ac550A1b4e2280d04c21cEa7EBD822934b5";

module.exports = function(deployer) {
  deployer.deploy(Shop, {gas: 4612388, from: crumble});
};