/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (x === -1) {
        return n % 2 === 0 ? 1 : -1;
    }

    let pow = 1;
    let exponent = Math.abs(n);
    for (let i = 0; i < exponent; i++) {
        pow *= x;
    }
    
    if (n < 0) {
        pow = 1 / pow;
    }

    return pow;
};
