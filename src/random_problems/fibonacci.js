

export default function fibonacci(n) {
    let previous = 1, beforePrevious = 1, tmp;

    for (var i = 3; i <= n; i++) {
        tmp = previous;
        previous = previous + beforePrevious;
        beforePrevious = tmp;
    }

    return previous;
}
