

function maxRevenueSoFar(arr, l, r) {
    const year = l + arr.length - r;

    if (l === r) {
        return arr[l] * year;
    }

    return Math.max(maxRevenueSoFar(arr, l+1, r) + arr[l] * year, maxRevenueSoFar(arr, l, r-1) + arr[r] * year);
}

export default function solution(arr) {
    return maxRevenueSoFar(arr, 0, arr.length - 1);
}
