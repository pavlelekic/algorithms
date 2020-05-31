/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    if (dividend === -2147483648 && divisor === -1) return 2147483647;
    if (Math.abs(dividend) < Math.abs(divisor)) return 0;
    
    let areSameSign = Math.sign(dividend) === Math.sign(divisor);
    
    let unsignedDivisor = Math.abs(divisor);
    let unsignedDividend = Math.abs(dividend);

    if (unsignedDivisor === unsignedDividend) return areSameSign ? 1 : -1;
    if (unsignedDivisor === 1) return areSameSign ? unsignedDividend : -unsignedDividend;

    
    let count = 0;
    
    for (let sum = unsignedDivisor; sum <= unsignedDividend; sum += unsignedDivisor) count++;
    
    return areSameSign ? count : -count;
};
