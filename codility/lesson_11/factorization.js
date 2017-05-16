// @flow weak

// modification of Sieve of Eratosthenes algorithm
module.exports.factorization = function(N /* : number*/) {
    var smallestDivisor = new Array(N);
    smallestDivisor.fill(0);
    smallestDivisor[0] = smallestDivisor[1] = 1;

    for (var i = 2; i * i < N; i++) {
        if (smallestDivisor[i] === 0) {
            for (var t = i * i; t < N; t += i) {
                smallestDivisor[t] = i;
            }
        }
    }

    return smallestDivisor;
}

module.exports.getPrimeFactors = function(x, divisorsArray) {
    var primeFactors = [];

    for (;divisorsArray[x] !== 0; x = x / divisorsArray[x]) {
        primeFactors.push(divisorsArray[x]);
    }

    primeFactors.push(x);

    return primeFactors;
}
