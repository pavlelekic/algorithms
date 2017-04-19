// @flow weak

/*
var A = [];
A[0] = 2;
A[1] = 3;
A[2] = 1;
A[3] = 5;
*/

function solution(xs) {
    var expectedSum = xs.length * (xs.length + 1) / 2;
    var actualSum = 0;

    for (var i = 0; i < xs.length; i++) {
        actualSum += xs[i];
    }

    return expectedSum - actualSum + xs.length + 1;
}
