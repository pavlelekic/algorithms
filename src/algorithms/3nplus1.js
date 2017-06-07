// @flow
var length, maxLength = 0;

export default function findMaxLength(lowerBound: number, upperBound: number) {
    for (var i = lowerBound; i <= upperBound; i++) {
        length = findLength(0, i);

        if (length > maxLength) {
            maxLength = length;
        }
    }
}

var newNumber;

function findLength(lengthSoFar, number) {
    if (number === 1) {
        return 1;
    }

    newNumber = number % 2 === 0 ? newNumber * 2 : 3 * number - 1;

    return findLength(lengthSoFar + 1, newNumber);
}
