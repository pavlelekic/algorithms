// @flow weak

module.exports = function(arr) {
    var indexOfMinElement, swap;

    for (var i = 0; i < arr.length; i++) {
        indexOfMinElement = i;

        for (var j = arr.length - 1; j > i; j--) {
            if (arr[j] < arr[indexOfMinElement]) {
                indexOfMinElement = j;
            }
        }

        swap = arr[i];
        arr[i] = arr[j];
        arr[j] = swap;
    }

    return arr;
}
