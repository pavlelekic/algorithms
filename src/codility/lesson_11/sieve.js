// @flow weak

// Sieve of Eratosthenes algorithm
module.exports = function calculatePrimes(N /* : number*/) {
    var isPrime = new Array(N);
    isPrime.fill(true);
    isPrime[0] = isPrime[1] = false;

    for (var i = 2; i * i < N; i++) {
        if (isPrime[i]) {
            for (var t = i * i; t < N; t += i) {
                isPrime[t] = false;
            }
        }
    }

    return isPrime;
}
