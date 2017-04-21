// @flow weak

/*
0 ... x+1
*/
var A = [];
A[0] = 1;
A[1] = 3;
A[2] = 1;
A[3] = 4;
A[4] = 2;
A[5] = 3;
A[6] = 5;
A[7] = 4;

function solution(targetPosition, xs) {
    var availablePositions = [];

    for (var i = 0; i < xs.length; i++) {
        if (xs[i] <= targetPosition) {
            availablePositions[xs[i]] = true;

            if (availablePositions.length === targetPosition) {
                return i;
            }
        }
    }

    return -1;
}

console.log(solution(A, 5)); // should be 6
