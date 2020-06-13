// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(numbers) {
    if (numbers.length === 0) return 0;
    // write your code in JavaScript (Node.js 8.9.4)
    let queue = [numbers[0]];
    let queueLength;
    let currentNum;
    // const halfSum = numbers.reduce((prev, curr) => Math.abs(prev) + Math.abs(curr), 0) / 2;
    const numsLength = numbers.length;
    for (let i = 1; i < numsLength; i++) {
        currentNum = numbers[i];
        queueLength = queue.length;
        for (let qi = 0; qi < queueLength; qi++) {
            queue.push(queue[qi] + currentNum);
            queue[qi] -= currentNum;
        }
    }
    
    let minSum = Number.POSITIVE_INFINITY;
    for(let i = 0; i < queue.length; i++) {
        minSum = Math.min(Math.abs(queue[i]), minSum);
    }
    
    return minSum;
}