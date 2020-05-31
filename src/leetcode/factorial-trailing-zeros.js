
function countDivisors(n, divisor) {
    let remaining = n;
    let count = 0;
    while (remaining % divisor === 0) {
        count++;
        remaining = remaining / divisor;
    }

    return count;
}

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let fiveDivisors = 0;
    for (let i = 5; i <= n; i += 5) {
        fiveDivisors += countDivisors(i, 5);
    }
    return fiveDivisors;
};
