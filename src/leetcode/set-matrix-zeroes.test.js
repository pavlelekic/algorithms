import Solution from './set-matrix-zeroes';

describe.skip("Mark all rows and columns containing zero with zero (in place)", () => {
    const problems = [
        {
            input: [
                [0,1,2,0],
                [3,4,5,2],
                [1,3,1,5]
            ],
            expected: [
                [0,0,0,0],
                [0,4,5,0],
                [0,3,1,0]
            ]
        },{
            input: [
                [1,1,1],
                [1,0,1],
                [1,1,1]
            ],
            expected: [
                [1,0,1],
                [0,0,0],
                [1,0,1]
            ]
        }
    ];

    problems.forEach((p) => {
        it(`should convert ${JSON.stringify(p.input)} to ${JSON.stringify(p.expected)}`, () => {
            const solution = new Solution(p.input);
            solution.setMatrixZeroes();
            expect(p.input).toEqual(p.expected);
        });
    });
});
