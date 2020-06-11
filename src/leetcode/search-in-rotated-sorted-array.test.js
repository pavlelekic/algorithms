import sol from './search-in-rotated-sorted-array';

test("Search in Rotated Sorted Array", () => {
    const problems = [
        // {
        //     input: {
        //         arr: [4,5,6,7,8,1,2,3],
        //         target: 8
        //     },
        //     expected: 4
        // },
        {
            input: {
                arr: [5,1,2,3,4],
                target: 1
            },
            expected: 1
        }
    ]
    
    problems.forEach(p => {
        expect(sol(p.input.arr, p.input.target)).toBe(p.problem.expected);
    });
});
