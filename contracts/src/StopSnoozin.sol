// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract StopSnoozin {
    uint256 public number;

    function setNumber(uint256 newNumber) public {
        number = newNumber;
    }

    function increment() public {
        number++;
    }

    // set it for Mon - Sun
    // Allow users to easily set up a wakeup schedule
    // Allow users to have a different wakeup schedule on different days of the week
    // Allow users to put up some stake in ETH or ERC20 tokens
    // Require users to trigger a transaction every day according to the wakeup schedule
    // Take away the stake if the user fails to trigger the transaction
}
