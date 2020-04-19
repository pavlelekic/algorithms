import minPathSum from './min-path-sum';

describe("Minimize sum along the path", () => {

    const problems = [{
            grid: [
                [1,3,1],
                [1,5,1],
                [4,2,1]
            ],
            expected: 7 // Because the path 1→3→1→1→1 minimizes the sum.
        }, {
            grid: [],
            expected: 0
        },
    ];

    problems.forEach((problem) => {
        it(`Min path of ${JSON.stringify(problem.grid)} should be ${problem.expected}`, () => {
            expect(minPathSum(problem.grid)).toBe(problem.expected);
        });
    });
});