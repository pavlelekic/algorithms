
function dfs(lastNumber, rollsLeft, rollMax, cache) {
    if (rollsLeft === 0) return 0;
    console.log({lastNumber, rollsLeft, cache});
    const cacheKey = `${lastNumber}:${rollsLeft}`;
    if (typeof cache[cacheKey] === 'undefined') {
        let count = 0;
        for (let i = 0; i < 6; i++) {
            if (i === lastNumber) continue;
            for (let j = 1; j <= rollMax[i] && rollsLeft - j >= 0; j++) {
                count += 1 + dfs(i, rollsLeft - j, rollMax, cache);
            }
        }
    
        cache[cacheKey] = count;
    }

    return cache[cacheKey];
}

export default function diceRoll(n, rollMax) {
    const cache = {};
    return dfs(-1, n, rollMax, cache);
}
