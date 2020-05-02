

export default function(coins, amount) {
    const dp = new Array(amount + 1);
    // const usedCoin = new Array(amount + 1);
    dp[0] = 0;

    for (let i = 1; i <= amount; i++) {
        dp[i] = Number.POSITIVE_INFINITY;
        coins.forEach(c => {
            if (typeof dp[i - c] !== 'undefined' && dp[i] > dp[i - c]  + 1) {
                dp[i] = dp[i - c]  + 1;
                // usedCoin[i] = c;
            }
        });
    }

    return dp[amount] === Number.POSITIVE_INFINITY ? -1 : dp[amount];
}
