// @flow weak

module.exports.countDivisors = function(N /*: number*/) {
    var count = 0;

    for (var i = 1; i * i < N; i++) {
        if (N % i === 0) {
            count += 2;
        }
    }

    if (i * i === N) {
        count++;
    }

    return count;
}

module.exports.isPrime = function(N /*: number*/) {
    for (var i = 2; i * i <= N; i++) {
        if (N % i === 0) {
            return false;
        }
    }

    return true;
}
