import solution from './max-subarray-sum';

test('Max subarray sum test data #1', () => {
    expect(solution([-1, 2, 4, -3, 5, 2, -5, 2])).toEqual(10);
});

test('Max subarray sum test data #2', () => {
    expect(solution([-2,1,-3,4,-1,2,1,-5,4])).toEqual(6);
});
