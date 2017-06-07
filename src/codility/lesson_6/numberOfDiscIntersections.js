

module.exports = function solution(discs) {
    var boundariesStartedAt = [];
    var boundariesEndedAt = [];
    var lengthMinusOne = discs.length - 1;

    // initialize boundary arrays with zero
    for (var i = 0; i <= lengthMinusOne; i++) {
        boundariesStartedAt[i] = 0;
        boundariesEndedAt[i] = 0;
    }

    // populate number of boundaries at each 'i' in range
    for (var i = 0; i <= lengthMinusOne; i++) {
        boundariesStartedAt[Math.max(i - discs[i], 0)]++;
        boundariesEndedAt[Math.min(i + discs[i], discs.length)]++;
    }

    var overlappingDiscsSoFar = boundariesStartedAt[0] - boundariesEndedAt[0];
    var overlappingPairs = (boundariesStartedAt[0] - 1) * boundariesStartedAt[0] / 2;

    for (var i = 1; i <= lengthMinusOne; i++) {
        if (boundariesStartedAt[i] > 0) {
            overlappingPairs += boundariesStartedAt[i] * (overlappingDiscsSoFar - boundariesEndedAt[i]);
        }

        overlappingDiscsSoFar += boundariesStartedAt[i] - boundariesEndedAt[i];
    }

    return overlappingPairs;
}
