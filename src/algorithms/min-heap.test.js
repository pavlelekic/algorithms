import MinHeap from './min-heap';

const numCompare = (a, b) => a - b;

describe("MinHeap", () => {
    const inputs = [
        [-1, 0],
        [0, -1],
        [0, -1, 3],
        [-1, 0, 1, 2, -1, -4],
        [5, 5, 6, 7, 1, 0, 24, 64, 2, 1, 0],
        [-1, -2, -3, 9, 7, 5],
        [-1, -1, 3]
    ];

    inputs.forEach((input) => {
        const expected = input.slice();
        expected.sort(numCompare);

        it(`should retrieve ${JSON.stringify(input)} in sorted order ${JSON.stringify(expected)}`, () => {
            const mh = new MinHeap(numCompare);
            input.forEach(i => mh.insert(i));
            const actual = [];
            while (mh.size() > 0) {
                actual.push(mh.getTopItem());
                mh.removeTopItem();
            }
            expect(expected).toEqual(actual);
        });
    });
});
