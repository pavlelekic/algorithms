// @flow weak

function solution(xs) {
    var twoSliceAverage = (xs[0] + xs[1]) / 2, threeSliceAverage;
    var minAverage = twoSliceAverage;
    var minStartingPosition = 0;

    for (var i = 2; i < xs.length; i++) {
        var twoSliceAverage = (xs[i - 1] + xs[i]) / 2;
        var threeSliceAverage = (xs[i - 2] + xs[i - 1] + xs[i]) / 3;

        if (twoSliceAverage < minAverage) {
            minAverage = twoSliceAverage;
            minStartingPosition = i - 1;
        }

        if (threeSliceAverage < minAverage) {
            minAverage = threeSliceAverage;
            minStartingPosition = i - 2;
        }
    }

    return minStartingPosition;
}
