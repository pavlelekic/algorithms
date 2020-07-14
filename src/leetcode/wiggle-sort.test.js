
import solution from './wiggle-sort';

describe("Solution", () => {
    const problems = [
        [[1,5,1,1,6,4] , [1,6,1,5,1,4]],
    ];

    problems.forEach((problem) => {
        it(JSON.stringify(problem), () => {
            expect(solution(problem[0])).toEqual(problem[1]);
        });
    });
});
