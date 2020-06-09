/**
 * @param {string} digits
 * @return {string[]}
 */

const digitsToCharsMap = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"]
};

var letterCombinations = function(digits) {
    if (digits === "") return [];
    const firstDigit = digits.charAt(0);
    const queue = digitsToCharsMap[firstDigit].slice();
    let currentStr;
    let currentDigit;

    while(queue[0].length < digits.length) {
        currentStr = queue.shift();
        currentDigit = digits.charAt(currentStr.length);
        digitsToCharsMap[currentDigit].forEach(ch => {
            queue.push(currentStr + ch);
        });
    }
    
    return queue;
};