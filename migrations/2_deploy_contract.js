const TodoListContract = artifacts.require("./TodoList.sol");

module.exports = function(deployer) {
  deployer.deploy(TodoListContract);
};
