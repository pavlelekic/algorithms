// @flow

function mergeSort(arr/*: Array<number>*/, from /*: number*/, to /*: number*/) {
    var middle = (from + to) >> 1;

    mergeSort(arr, from, middle);
    mergeSort(arr, middle, to);

    // merge two parts
}

module.exports = mergeSort;
