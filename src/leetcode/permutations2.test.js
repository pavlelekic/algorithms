import solution from './permutations2';

test('Random arr #1', () => {
    const actual = solution([2,1,1]);
    expect(actual).toEqual(expect.arrayContaining([
        [1,1,2],
        [1,2,1],
        [2,1,1]
    ]));
});
