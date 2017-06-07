// @flow

module.exports = {};

module.exports.subtractionGCD = function(a: number, b: number) {
    if (a === b) {
        return a;
    }
    else if (a > b) {
        return modulusGCD(a - b, b);
    }
    else {
        return modulusGCD(a, b - a);
    }
}

function modulusGCD(a: number, b: number) {
    return a > b ? _modulusGCD(a, b) : _modulusGCD(b, a);
}

module.exports.modulusGCD = modulusGCD;

function _modulusGCD(a, b) {
    var mod = a % b;

    if (mod === 0) {
        return b;
    }

    return modulusGCD(b, mod);
}

function fastGCD(a: number, b: number, multiplier: number) {
    if (a === b) {
        return a * multiplier;
    }
    else if (a % 2 === 0 && b % 2 === 0) {
        return fastGCD(a >> 1, b >> 1, multiplier * 2);
    }
    else if (a % 2 === 0) {
        return fastGCD(a >> 1, b, multiplier);
    }
    else if (b % 2 === 0) {
        return fastGCD(a, b >> 1, multiplier);
    }
    else if (a > b) {
        return fastGCD(a - b, b, multiplier);
    }
    else {
        return fastGCD(a, b - a, multiplier);
    }
}

module.exports.fastGCD = fastGCD;

function lcmOfTwoNumbers(a: number, b: number) {
    return a * b / fastGCD(a, b, 1);
}

module.exports.lcmOfTwoNumbers = lcmOfTwoNumbers;

// you can do lcmOfArrayOfNumbers(0, [47, 54, 26, 35]);
function lcmOfArrayOfNumbers(position: number, numbers: Array<number>) {
    if (numbers.length - position > 2) {
        return lcmOfArrayOfNumbers(position, lcmOfArrayOfNumbers(position + 1, numbers));
    }

    return lcmOfTwoNumbers(numbers[position], numbers[position + 1]);
}

module.exports.lcmOfArrayOfNumbers = lcmOfArrayOfNumbers;
