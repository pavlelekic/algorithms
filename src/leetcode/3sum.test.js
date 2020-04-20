import sum3 from './3sum';

describe("Find all triplets that sum to 0", () => {
    const problems = [{
            input: [-1, 0, 1, 2, -1, -4],
            expected: [
                [-1, -1, 2],
                [-1, 0, 1],
            ]
        },
    ];

    problems.forEach((problem) => {
        it(`should find triplets ${JSON.stringify(problem.expected)} of ${JSON.stringify(problem.input)} that sum to zero`, () => {
            const actual = sum3(problem.input);
            expect(actual).toEqual(problem.expected);
        });
    });
});
