// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract WUSDC is ERC20 {

    address public owner;

    uint256 constant fixedAmount = 100 ether;
    uint256 constant waitForOneDay = 1 days;
    mapping(address =>uint256) public userRequestForForADay;

    modifier onlyOwner(){
        require(msg.sender == owner,"not owner");
        _;
    }

    constructor()ERC20("WUSDC","WUSDC"){
        owner = msg.sender;

    }

    function mint(address _to)public{
        require(userRequestForForADay[msg.sender] <= (block.timestamp + waitForOneDay),"Wait for 24 hours to end" );

        _mint(_to, fixedAmount);

        userRequestForForADay[msg.sender] = block.timestamp;
        

    }


    function ownerMint(address _addr, uint256 _amount)public onlyOwner{
        _mint(_addr, _amount *1e18);
    }

    



}