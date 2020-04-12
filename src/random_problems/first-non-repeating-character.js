
export default function solution(arr) {
    counts = {};
    arr.forEach(a => counts[a] = typeof counts[a] === 'undefined' ? 0 : counts[a] + 1);

    for (let i = 0; i < arr.length; i++) {
        if (counts[arr[i]] === 1) {
            return arr[i];
        }
    }
}