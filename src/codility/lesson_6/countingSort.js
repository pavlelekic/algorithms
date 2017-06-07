// @flow

module.exports = function(arr/*: Array<number>*/, N/*: number*/) {
    var counts = new Array(N);

    for (var j = 0; j < N; j++) {
        counts[j] = 0;
    }

    for (var i = 0; i < arr.length; i++) {
        counts[arr[i]]++;
    }

    var result = new Array(arr.length);
    var currentPosition = 0;

    for (var k = 0; k < N; k++) {
        if (counts[k] > 0) {
            for (var m = 0; m < counts[k]; m++) {
                result[currentPosition++] = k;
            }
        }
    }

    return result;
}
