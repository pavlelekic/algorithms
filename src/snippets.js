
const totalCounts = {};
nums.forEach(num => {
    totalCounts[num] = typeof totalCounts[num] === 'undefined' ? 1 : 1 + totalCounts[num];
});

const numCompare = (a, b) => a - b;


// test file
import solution from './hand-of-straights';

test("Hand of Straights", () => {
    expect(solution([1,2,3,6,2,3,4,7,8], 3)).toBe(true);
});

