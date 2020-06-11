/**
 * @param {string} s
 * @return {number}
 */

var titleToNumber = function(s) {
    let sum = 0;
    let len = s.length;
    for(let i = 0; i < len; i++) {
        sum = sum * 26 + s.charCodeAt(i) - 64;
    }
    return sum;
    // console.log('A'.charCodeAt(0));
};