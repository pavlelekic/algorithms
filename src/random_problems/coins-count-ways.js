

export default function(coins, amount) {
    const dp = new Array(amount + 1);
    // const usedCoin = new Array(amount + 1);
    dp[0] = 1;

    for (let i = 1; i <= amount; i++) {
        dp[i] = 0;
        coins.forEach(c => {
            if (typeof dp[i - c] !== 'undefined') {
                dp[i] += dp[i - c];
                // usedCoin[i] = c;
            }
        });
    }

    return typeof dp[amount] === 'undefined' ? -1 : dp[amount];
}
