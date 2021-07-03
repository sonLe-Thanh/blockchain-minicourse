pragma solidity ^0.8.4;

contract ERC20token{
    string public name = "LE THANH token";
    string public symbol = "LTT";
    uint public totalSupply = 1000000*10**18;
    uint public decimals = 18;
    
    mapping(address => uint ) balances;
    mapping(address => mapping(address =>uint)) allowance;
    
    event Transfer(address From, address To, uint Amount);
    event Approval(address From, address To, uint Amount);
    constructor(){
        balances[msg.sender] = totalSupply;
    }
    
    function TotalSupply() public view returns(uint){
        return totalSupply;
    }
    
    function balanceOf(address _address) public view returns(uint){
        return balances[_address];
    }
    
    function transfer(address _to, uint _amount) public returns(bool){
        require(balances[msg.sender] >= _amount, "Not enough money!");
        balances[msg.sender] -= _amount;
        balances[_to] += _amount;
        emit Transfer(msg.sender, _to, _amount);
        return true;
    }
    
    
    // Delegated transaction
    // A approve x LTT to B // B transferFrom(A, x) => C
    function approve(address _to, uint _amount) public returns (bool){
        require(balances[msg.sender] >= _amount, "Not enough money!");
        allowance[msg.sender][_to] = _amount;
        emit Approval(msg.sender, _to, _amount);
        return true;
    }
    // bob call this function
    function transferFrom(address _from, address _to, uint _amount)  public returns(bool){
        require(allowance[_from][msg.sender]>= _amount, "Not enough allowance!");
        require(balances[_from]>= _amount, "Not enough money!");
        allowance[_from][msg.sender]  -= _amount;
        balances[_from] -= _amount;
        balances[_to] += _amount;
        emit Transfer(_from, _to, _amount);
        return true;
    }
}