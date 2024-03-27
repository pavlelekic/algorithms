/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (money) {
    if (money.length === 1) return money[0];
    const numHouses = money.length;
    const sums = new Array(numHouses);
    for (let i = 0; i < numHouses; i++) {
        if (i < 2) {
            sums[i] = money[i];
        } else {
            sums[i] = money[i] + Math.max(sums[i - 2], sums[i - 3] || 0);
        }
    }

    return Math.max(sums[money.length - 1], sums[money.length - 2]);
};