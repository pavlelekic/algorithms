

function solution(lowerBound, upperBound, divisor) {
    var remainder = lowerBound % divisor;
    return 1 + Math.floor((upperBound - (lowerBound + remainder)) / divisor);
}
