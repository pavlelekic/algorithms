

export default function solution(arr) {
    const cache = new Array(arr.length);
    for (let i = 0; i < arr.length; i++) {
        cache[i] = new Array(arr.length);
    }

    function maxRevenueSoFar(l, r) {
        if (!cache[l][r]) {
            const year = l + arr.length - r;

            if (l === r) {
                return arr[l] * year;
            }
    
            cache[l][r] = Math.max(
                maxRevenueSoFar(l+1, r) + arr[l] * year,
                maxRevenueSoFar(l, r-1) + arr[r] * year
            );
        }

        return cache[l][r];
    }

    return maxRevenueSoFar(0, arr.length - 1);
}
