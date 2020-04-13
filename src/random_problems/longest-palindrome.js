
export default function solution(str) {
    const counts = {};
    let ch;
    for (let i = 0; i < str.length; i++) {
        ch = str.charAt(i);
        counts[ch] = typeof counts[ch] === 'undefined' ? 1 : counts[ch] + 1;
    }

    let maxOddChLength = 0;
    let maxLength = 0;
    for (let ch of counts) {
        if (counts[ch] % 2 === 0) {
            maxLength += counts[ch];
        } else {
            maxOddChLength = maxOddChLength > counts[ch] ? maxOddChLength : counts[ch];
        }
    }

    return maxLength + maxOddChLength;
}
