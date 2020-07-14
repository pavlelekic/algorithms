import solution from './godaddy';

describe("Solution", () => {
    const problems = [
        ['asdfkjeghfalawefhaef', 13],
    ];

    problems.forEach((problem) => {
        it(JSON.stringify(problem), () => {
            expect(solution(problem[0])).toEqual(problem[1]);
        });
    });
});
