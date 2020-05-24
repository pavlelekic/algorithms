/**
 * @param {number[]} A
 * @return {number}
 */

//  function maxSequenceEndingAt(i, A, cache) {
//     if (i < 0) return 0;

//     if (typeof cache[i] === 'undefined') {
//         const index = i % A.length;
//         cache[i] = Math.max(
//             A[index],
//             maxSequenceEndingAt(i - 1) + A[index]
//         );
//     }

//     return cache[i];
//  }

export default function(A) {
    let globalMax = Number.NEGATIVE_INFINITY;
    let localMax = Number.NEGATIVE_INFINITY;
    
    const I = 2 * A.length;
    let index;
    let sequenceLength = 0;

    for (let i = 0; i < I; i++) {
        index = i % A.length;
        if (localMax < 0) {
            sequenceLength = 1;
            localMax = A[index];
        } else {
            sequenceLength++;
            if (sequenceLength > A.length) {
                localMax -= A[i - A.length];
                sequenceLength--;
                for(let k = A.length - 1; k >= 0; k--) {
                    if (A[i - k] < 0) {
                        localMax -= A[i - k];
                        sequenceLength--;
                    }
                }
            }
            localMax += A[index];
        }
        globalMax = Math.max(localMax, globalMax);
    }

    return globalMax;

    // const I = 2 * A.length;
    // let globalMax = 0;
    // const cache = {};
    // for (let i = 0; i < I; i++) {
    //     globalMax = Math.max(globalMax, maxSequenceEndingAt(i, A, cache));
    // }
    // return globalMax;
};
