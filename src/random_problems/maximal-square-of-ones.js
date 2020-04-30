// import PairCache from '../algorithms/pair-cache';

// const cacheKey = (i, j) => `${i}:${j}`;

// function dfs(matrix, row, col, visited, edge) {
//     visited[cacheKey(row, col)] = true;
//     if (row === matrix.length - 1 || col === matrix[0].length - 1) {
//         return edge;
//     }
//     if (matrix[row + 1, col] === 1 && matrix[row, col + 1] === 1 && matrix[row + 1, col + 1] === 1) {
//         return dfs(matrix, row + 1, col + 1, visited, edge + 1);
//     }
//     return edge;
// }

// export default function sol(matrix) {
//     if (matrix.length === 0 || matrix[0].length === 0) return 0;
//     const visited = {};
//     let ck;
//     let best = 0;
//     for(let row = 0; row < matrix.length; row++) {
//         for (let col = 0; col < matrix[0].length; col++) {
//             ck = cacheKey(row, col);
//             if (!visited[ck] && matrix[row, col] === 1) {
//                 best = Math.max(
//                     dfs(matrix, row, col, visited, 1),
//                     best
//                 );
//             }
//         }
//     }

//     return best * best;
// }

class PairCache {
    __cache = {};

    constructor(initialValue = 0) {
        this.__undefinedEl = initialValue;
    }

    initializeWith = (el) => this.__undefinedEl = el;

    __cacheKey = (x, y) => `${x}:${y}`;

    get = (x, y) => {
        const ck = this.__cacheKey(x, y);
        return typeof this.__cache[ck] === 'undefined' ? this.__undefinedEl : this.__cache[ck];
    }

    set = (x, y, value) => this.__cache[this.__cacheKey(x, y)] = value;
}

export default function solution(matrix) {
    const dp = new PairCache(0);
    let best = 0;
    for(let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            if (matrix[row][col] === "1") {
                if (col > 0 && row > 0) {
                    dp.set(row, col, Math.min(
                        dp.get(row - 1, col - 1),
                        dp.get(row, col - 1),
                        dp.get(row - 1, col),
                    ) + 1);
                } else {
                    dp.set(row, col, 1);
                }
                best = Math.max(best, dp.get(row, col));
            }
        }
    }

    return best * best;
}


