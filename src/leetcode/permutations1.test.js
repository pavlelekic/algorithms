import solution from './permutations1';

test('Random arr #1', () => {
    const actual = solution([1,2,3]);
    expect(actual).toEqual(expect.arrayContaining([
        [1,2,3],
        [1,3,2],
        [2,1,3],
        [2,3,1],
        [3,1,2],
        [3,2,1]
    ]));
});
