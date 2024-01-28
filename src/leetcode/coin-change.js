/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  if (amount === 0) return 0;
  const minCoinsUsed = new Array(amount + 1);

  const fewestNumberOfCoins = (coins, amount) => {
    if (typeof minCoinsUsed[amount] !== "undefined") {
      return minCoinsUsed[amount];
    }

    let minCoins = Number.POSITIVE_INFINITY;

    for (let i = 0; i < coins.length; i++) {
      const coin = coins[i];
      if (amount - coin > 0) {
        minCoins = Math.min(
          minCoins,
          1 + fewestNumberOfCoins(coins, amount - coin)
        );
      } else if (amount - coin === 0) {
        minCoins = 1;
        break;
      }
    }

    minCoinsUsed[amount] = minCoins;
    return minCoinsUsed[amount];
  };

  const result = fewestNumberOfCoins(coins, amount);
  return result === Number.POSITIVE_INFINITY ? -1 : result;
};
