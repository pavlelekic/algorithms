// @flow

var gcd = require('./gcd');

function solution(M, N) {
    var lcm = gcd.lcmOfTwoNumbers(M, N);

    return lcm / M;
}
