// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import  "../../lib/ds-test/src/test.sol";
import {Vm} from "../../lib/forge-std/src/vm.sol";

contract Fork_Test is DSTest {

    Vm internal constant vm = Vm(0x7109709ECfa91a80626fF3989D68f67F5b1DD12D);

    ERC20 busd = ERC20(0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56);

    function testBalance() external {
        uint256 bal = busd.balanceOf(0x8894E0a0c962CB723c1976a4421c95949bE2D4E3);
        emit log_named_uint("bal", bal);

        // transfer
        vm.prank(0x8894E0a0c962CB723c1976a4421c95949bE2D4E3);
        busd.transfer(0x4e00a2efA3743109F3d85D940E763182efE3dF41, 10_000 ether);
        uint256 balAfter = busd.balanceOf(0x4e00a2efA3743109F3d85D940E763182efE3dF41);
        emit log_named_uint("balAfter", balAfter);

        // expect balance after transfer
    }

}