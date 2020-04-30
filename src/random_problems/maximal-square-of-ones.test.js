import solution from './maximal-square-of-ones';

test('maximal-square-of-ones #1', () => {
    expect(solution(
       [["1","0","1","0","0"],
        ["1","0","1","1","1"],
        ["1","1","1","1","1"],
        ["1","0","0","1","0"]]
    )).toEqual(4);
});