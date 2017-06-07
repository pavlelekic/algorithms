// @flow weak

module.exports = function maximumSlice(arr) {
    var sumSoFar = 0;
    var maxSum = 0;

    for (var i = 0; i < arr.length; i++) {
        sumSoFar = Math.max(0, sumSoFar + arr[i]);
        maxSum = Math.max(sumSoFar, maxSum);
    }

    return maxSum;
}
