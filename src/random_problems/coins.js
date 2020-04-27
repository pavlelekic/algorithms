
function solution(arr) {
    const wasReached = {"0": true};
    const reachedSums = [0];
    let current;

    while (reachedSums.length > 0) {
        current = reachedSums.pop();
        coins.forEach(c => {
            if (current + c === target) return true;
            else if (!wasReached[current + c] && current + c < target) {
                wasReached[current + c] = true;
                reachedSums.push(current + c);
            }
        });
    }

    return false;
}


function solution3(arr) {
    const minCoins = new Array(targetSum + 1);
    minCoins[0] = 0;

    for (let i = 1; i <= targetSum; i++) {
        coins.forEach(c => {
            if (i - c >= 0 && typeof minCoins[i - c] !== 'undefined') {
                minCoins[i] = Math.min(1 + minCoins[i - c], minCoins[i] || Number.POSITIVE_INFINITY);
            }
        });
    }

    return minCoins[targetSum];
}