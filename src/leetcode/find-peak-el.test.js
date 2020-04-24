import solution from './find-peak-el';

describe.skip("Find peak el index inside array in logN time", () => {
    const problems = [
        {
            input: [1,2,3,1],
            expected: 2
        },
    ];

    problems.forEach((p) => {
        it(`should find in ${JSON.stringify(p.input)} index ${JSON.stringify(p.expected)} to be the peak el`, () => {
            expect(solution(p.input)).toEqual(p.expected);
        });
    });
});
