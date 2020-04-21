import diceRoll from './dice-roll-simulation';

describe("Find all triplets that sum to 0", () => {
    const problems = [
        // {
        //     input: {
        //         n: 2,
        //         rollMax: [1, 1, 2, 2, 2, 3]
        //     },
        //     expected: 34
        // }, {
        //     input: {
        //         n: 3,
        //         rollMax: [1, 1, 2, 2, 2, 3]
        //     },
        //     expected: 181
        // },
        {
            input: {
                n: 2,
                rollMax: [1, 1, 1, 1, 1, 1]
            },
            expected: 30
        }
    ];

    problems.forEach((p) => {
        it(`should find ${JSON.stringify(p.expected)} distinct sequences for ${JSON.stringify(p.input)}`, () => {
            const actual = diceRoll(p.input.n, p.input.rollMax);
            expect(actual).toEqual(p.expected);
        });
    });
});
