
function isPalindrome(str, cache, left, right) {
    if (left >= right) {
        return false;
    }

    const cacheKey = `${left},${right}`;
    if (typeof cache[cacheKey] === "undefined") {
        cache[cacheKey] = str[left] === str[right] && isPalindrome(str, cache, left + 1, right - 1);
    }

    return cache[cacheKey];
}

export default function solution(str) {
    if (str.length === 0) return "";
    let longestPalindromicSequence = str.charAt(0);
    const cache = {};
    let l = 0;
    let isLeftTurn = true;
    let r = str.length - 1;
    while (l < r) {
        if (longestPalindromicSequence < r - l && isPalindrome(str, cache, l, r)) {
            longestPalindromicSequence = str.substring(l, r + 1);
        }
        if (isLeftTurn) {
            l++;
        } else {
            r--;
        }
        isLeftTurn = !isLeftTurn;
    }

    return longestPalindromicSequence;
}
