/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

var uniquePaths = function (m, n) {
  const limit = m + n - 2;
  const factorials = new Array(limit + 1);

  factorials[0] = 1;
  for (let i = 1; i <= limit; i++) {
    factorials[i] = i * factorials[i - 1];
  }

  return factorials[limit] / (factorials[n - 1] * factorials[m - 1]);
};
