
function numWays(string, position, cache) {
    if (position === -1) return 1;
    if (position < 0) return 0;

    if (cache[position] === undefined) {
        let totalWays = 0;
        const prevCh = string.charAt(position - 1);
        const currentNumber = parseInt(string.charAt(position), 10);
        if (currentNumber !== 0) {
            totalWays = numWays(string, position - 1, cache);
        }
        if (prevCh === '1' || (
            prevCh === '2' &&
            currentNumber <= 6
        )) {
            totalWays += numWays(string, position - 2, cache);
        }

        cache[position] = totalWays;
        // console.log(JSON.stringify(cache));
    }

    return cache[position];
}

/**
 * @param {string} s
 * @return {number}
 */
function numDecodings(string) {
    if (string.charAt(0) === '0')  return 0;
    return numWays(string, string.length - 1, {});
};
