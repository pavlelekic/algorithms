import solution from './summary-ranges';

test("Summary ranges", () => {
    expect(solution(
        // [0,1,2,4,5,7]
        [0,2,3,4,6,8,9]
    )).toBe(
        // ["0->2","4->5","7"]
        ["0","2->4","6","8->9"]
    );
});
