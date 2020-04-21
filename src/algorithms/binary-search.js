
function findIndex(sortedArr, value, lo, hi) {
    if (lo > hi) return -1;
    const middle = lo + Math.floor((hi - lo) / 2);
    if (value === sortedArr[middle]) {
        return middle;
    } else if (value > sortedArr[middle]) {
        return findIndex(sortedArr, value, middle + 1, hi);
    } else {
        return findIndex(sortedArr, value, lo, middle - 1);
    }
}

export default function solution(sortedArr, value) {
    return findIndex(sortedArr, value, 0, sortedArr.length - 1);
}