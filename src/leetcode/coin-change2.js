/* 
You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
*/

export default function(coins, amount) {
    const minCoins = new Array(amount + 1);
    minCoins[amount] = 0;
    let targetAmount;

    for (let currentAmount = amount; currentAmount >= 0; currentAmount--) {
        if (minCoins[currentAmount] === undefined) continue;
        for (let c = 0; c < coins.length; c++) {
            targetAmount = currentAmount - coins[c];
            if (targetAmount >= 0) {
                minCoins[targetAmount] = Math.min(
                    minCoins[targetAmount] === undefined ? Number.POSITIVE_INFINITY : minCoins[targetAmount],
                    minCoins[currentAmount] + 1
                );
            }
        }
    }

    return minCoins[0] === undefined ? -1 : minCoins[0];
}
