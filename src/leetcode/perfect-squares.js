/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    const reachedSums = new Array(n + 1); // index = sum, value = number of perfect squares
    reachedSums[0] = 0;
    let product;
    let productee;
    
    for (let i = 0; i < n; i++) {
        if (reachedSums[i] !== undefined) {
            productee = 1;
            product = 1;
            while (i + product <= n) {
                // console.log(reachedSums[i] + 1, reachedSums[i + product], i + product);
                reachedSums[i + product] = Math.min(
                    reachedSums[i] + 1,
                    reachedSums[i + product] || Number.POSITIVE_INFINITY
                );
                productee++;
                product = productee * productee;
            }
        }
    }
    
    // console.log(reachedSums)
    return reachedSums[n];
};