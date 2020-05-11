import solution from './hand-of-straights';

test("Hand of Straights", () => {
    expect(solution([1,2,3,6,2,3,4,7,8], 3)).toBe(true);
});

test("Hand of Straights", () => {
    expect(solution([2, 1], 2)).toBe(true);
});
