pragma solidity ^0.8.4;

contract aliceBob{
    uint a;
    uint b;
    address alice = 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4;
    address bob = 0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2;
    // function setA(uint _a) public payable{
    //     require(msg.value == 1 ether);
    //     require(msg.sender == alice);
    //     a = _a;
    // }
    
    // function setB(uint _b) public payable{
    //     require(msg.value == 1 ether);
    //     require(msg.sender == bob);
    //     b = _b;
    // }
    
    //Create random based on timestamp
    function createRandom() public view returns(uint){
        // Can have as many as params as wishes;
        return uint(sha256(abi.encodePacked("abcd", block.timestamp, msg.sender, block.number)));
    }
    
    function finish() public{
        require(address(this).balance == 2 ether);
        uint rand = createRandom();
        if ( rand %2 ==0){
            payable(alice).transfer(address(this).balance);
        }
        else{
            payable(bob).transfer(address(this).balance);
        }
    }
}