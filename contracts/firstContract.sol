pragma solidity ^0.8.4;

contract UserName{
    // uint val;
    mapping(address=>string) userNameOf;
    event Set(address user, string userName);
    
    address owner;
    
    constructor(){
        owner = msg.sender;
    }
    
    function setUserName(string memory _userName) public payable {
        require(msg.value == 1 ether, "Not enough money!");
        userNameOf[msg.sender] = _userName;
        emit Set(msg.sender, _userName);
    }
    
    function getUserName(address _address) public view returns(string memory) {
        return userNameOf[_address];
    }
    
    function viewValue() public payable returns(uint){
        return msg.value;
    }
    
    function withdraw() public {
        require(msg.sender == owner);
        payable(msg.sender).transfer(address(this).balance);
    }
    function getBalance() public view returns(uint){
        require(msg.sender == owner);
        return address(this).balance;
    }
}