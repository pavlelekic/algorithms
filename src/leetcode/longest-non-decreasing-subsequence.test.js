import solution from './longest-non-decreasing-subsequence';

test('Random arr #1', () => {
    const arr = [-1, 3, 4, 5, 2, 2, 2, 2];
    expect(solution(arr)).toBe(5);
});

test('Random arr #2', () => {
    const arr = [-1, 5, 3, 4, 5, 2, 2, 2, 2, -2, -2];
    expect(solution(arr)).toBe(5);
});

test('Random arr #3', () => {
    const arr = [-1, 3, 4, 5, 2, 2, 2, 2, 3, 4];
    expect(solution(arr)).toBe(7);
});

test('Random arr #4', () => {
    const arr = [-1, 3, 4, 5, 2, 2, 3, 2, 2];
    expect(solution(arr)).toBe(5);
});
