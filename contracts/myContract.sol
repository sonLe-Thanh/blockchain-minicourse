pragma solidity ^0.8.4;

contract myFirstContract{
    // Fixed-size types
    int a;
    int b =-10;
    uint c;
    uint d = 20;
    bool isStudent = true;
    address myAddress;
    
    // variable-size types;
    string myName = "Son Le-Thanh";
    //nt[] naturalArray = [1,2,3];
    
    // name => age
    mapping(string => uint) ageOf;
    // ageOf["Son"] = 21;
    // delete ageOf["Son"];
    
    
    //User-defined types;
    struct student{
        string name;
        uint age;
        uint id;
    }
    
    // Built-in types
    // msg.sender tx.origin
    
    function view1() public view returns(address){
        return msg.sender;
    }
    function view2() public view returns(address){
        return tx.origin;
    }
    
    // Ex Alice => function of contract A => function of contract B (msg.sender) == address(contract A) (closest of the caller)
    // tx.origin == address(Alice) (closest of the callee)
    
    // msg.value = 1 ether;
    // block.timestamp =>Current time(seconds from 1970 til now)
    //block.number;
    function view3() public view returns(uint){
        return block.timestamp;
    }
    function view4() public view returns(uint){
        return block.number;
    }
    
    //function
    uint value;
    
    function set(uint _val) public {
            value = _val;
            
    }
    
    function get() public view returns(uint){
        return value;
    }
    // Function: view info on blockchain (include after scope of the function); data manipulation types (not include view keyword)
    // scope: public: everybody can call this function as well as any other functions.
    // private: only functions in the same smart contract can call this functions.
    // internal: almost same as private, and inheritanced contract can also calll.
    // external: function can be called by anyone outside this contract, and cannot be called by functions in this contract.
    
    // Control-structures 
    // if (value == 0){
    //     value++;
    // }
    // elif (value ==1){
    //     value =0;
    // }
    
    
    
}