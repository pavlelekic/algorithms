/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x === 0) return 0;
    if (x === 1) return 1;
    let minDiff = Number.POSITIVE_INFINITY;
    let currentDiff;
    let i;
    for (i = 1; i < x; i++) {
        currentDiff = x - i * i;
        if (currentDiff >= 0 && currentDiff < minDiff) {
            minDiff = currentDiff;
        } else {
            break;
        }
    }
    
    return i - 1;
};