
export default function(str) {
    if (str === '') return 0;
    let l = 0;
    let r = 0;
    const repeatCounts = {};
    const isRepeated = (ch) => repeatCounts[ch] > 0;
    repeatCounts[str.charAt(0)] = 1;
    let maxLength = 1;
    const hasReachedTheEnd = () => r + 1 === str.length;

    while(!hasReachedTheEnd()) {
        // move to the right as much as you can without repeating chars
        while(!hasReachedTheEnd() && !isRepeated(str.charAt(r + 1))) {
            r++;
            repeatCounts[str.charAt(r)] = 1;
        }

        // mark the max
        maxLength = Math.max(maxLength, r - l + 1);

        // move left until you reach the stop char from the right
        while (l <= r && !hasReachedTheEnd() && repeatCounts[str.charAt(r + 1)] > 0) {
            repeatCounts[str.charAt(l)]--;
            l++;
        }
    }

    return maxLength;
}
