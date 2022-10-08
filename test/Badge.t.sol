pragma solidity ^0.8.0;

import "../contracts/Badge.sol";
import "../lib/ds-test/src/test.sol";

contract Badgeg_Test is DSTest {

    Badge badge;

    function setUp() public {
        badge = new Badge("Badge", "BADGE", "Badge Name", "Badge Description");
    }

    function testMint() public {
        badge.mint(address(this), 1);
        uint256 bal = badge.balanceOf(address(this));
        assertEq(bal, 1);
        emit log_named_uint("Balance", bal);
    }
}