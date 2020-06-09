
function hasTargetBinarySearch(arr, target) {
    let l = 0;
    let r = arr.length - 1;
    let mid;
    while (l < r) {
        mid = l + Math.trunc((r - l) / 2);
        if (arr[mid] === target) {
            return true;
        } else if (arr[mid] > target) {
            r = mid;
        } else {
            l = mid + 1;
        }
    }
    
    return arr[l] === target;
}


/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (matrix.length === 0 || matrix[0].length === 0) return false;

    const lastColIndex = matrix[0].length - 1;

    for (let row = 0; row < matrix.length; row++) {
        if (
            matrix[row][0] <= target && matrix[row][lastColIndex] >= target &&
            hasTargetBinarySearch(matrix[row], target)
        ) {
            return true;
        }
    }
    
    return false;
};