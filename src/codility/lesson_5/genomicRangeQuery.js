// @flow

function solution(sequence, lowerBounds, upperBounds) {
    // create indexes for A, C, T, G
    var A = [0], C = [0], T = [0], G = [0];
    var currentChar;
    var length = sequence.length;

    for (var i = 1; i <= length; i++) {
        // copy previous sum
        A[i] = A[i - 1];
        C[i] = C[i - 1];
        G[i] = G[i - 1];
        T[i] = T[i - 1];

        currentChar = sequence.charAt(i-1);

        if (currentChar === 'A') {
            A[i] += 1;
        }
        else if (currentChar === 'C') {
            C[i] += 1;
        }
        else if (currentChar === 'G') {
            G[i] += 1;
        }
        else if (currentChar === 'T') {
            T[i] += 1;
        }
    }

    // find minimums for M queries
    var minimums = [];

    for (var j = 0; j < lowerBounds.length; j++) {
        if (A[upperBounds[j] + 1] - A[lowerBounds[j]] > 0) {
            minimums[j] = 1;
            continue;
        }
        if (C[upperBounds[j] + 1] - C[lowerBounds[j]] > 0) {
            minimums[j] = 2;
            continue;
        }
        if (G[upperBounds[j] + 1] - G[lowerBounds[j]] > 0) {
            minimums[j] = 3;
            continue;
        }
        if (T[upperBounds[j] + 1] - T[lowerBounds[j]] > 0) {
            minimums[j] = 4;
            continue;
        }
    }
    return minimums;
}

solution('CAGCCTA', [2, 5, 0], [4, 5, 6]);
