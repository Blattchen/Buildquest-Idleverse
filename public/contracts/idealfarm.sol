// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract IdealFarm is ERC20{

    // userAddress => stakingBalance
    mapping(address => uint256) public stakingBalance;
    // userAddress => isStaking boolean
    mapping(address => bool) public isStaking;
    // userAddress => timeStamp
    mapping(address => uint256) public startTime;
    // userAddress => pmknBalance
    mapping(address => uint256) public IdealBalance;
    // tokenURI => nftCount
    mapping(string => uint256) public nftCount;    



    uint256 private nftPrice;

    event Stake(address indexed from, uint256 amount);
    event Unstake(address indexed from, uint256 amount);
    event YieldWithdraw(address indexed to, uint256 amount);
    event MintNFT(address indexed to, uint256 indexed tokenId);
    address nftcontract;
    constructor(
        address _nftcontract
        ) {
            nftcontract = _nftcontract;
        }
        // functions to stake
        // function to unstake 
        // funtion to claim yeild 


}