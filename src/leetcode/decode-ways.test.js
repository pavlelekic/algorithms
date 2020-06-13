import solution from './decode-ways';

describe("Calc number of ways to decode a string of char numbers (0-26) to chars", () => {
    const problems = [{
            input: "226",
            expected: 3
        },
    ];

    problems.forEach((problem) => {
        it(`should find triplets ${JSON.stringify(problem.expected)} ways to decode ${JSON.stringify(problem.input)}`, () => {
            const actual = solution(problem.input);
            expect(actual).toEqual(problem.expected);
        });
    });
});
