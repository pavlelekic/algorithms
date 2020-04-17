import solution from './permutations1';

test('Random arr #1', () => {
    const actual = solution([1,1,2]);
    expect(actual).toEqual(expect.arrayContaining([
        [1,1,2],
        [1,2,1],
        [2,1,1]
    ]));
});
