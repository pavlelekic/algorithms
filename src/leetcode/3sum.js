// [-1, 0, 1, 2, -1, -4],

// export default function sum3(nums) {
//     if (!Array.isArray(nums)) return [];
//     nums.sort((a, b) => a - b);
//     const numOcurrencesCount = {};
//     let el;
//     for (let i = 0; i < nums.length; i++) {
//         el = nums[i];
//         numOcurrencesCount[el] = typeof numOcurrencesCount[el] === 'undefined' ? 1 : numOcurrencesCount[el] + 1;
//     }
//     const result = [];
//     let target;
//     const I = nums.length - 2;
//     const J = nums.length - 1;
//     let r;
//     for (let l = 0; l < I; l++) {
//         for (let j = l + 1; j < J; j++) {
//             target = -(nums[l] + nums[j]);
//             r = result.length === 0 ? null : result[result.length - 1];
//             if (numOcurrencesCount[target] > 0 && target > nums[j] &&
//                 (result.length === 0 || (r[0] !== nums[l] || r[1] !== nums[j] || r[2] !== target))
//             ) {
//                 result.push([nums[l], nums[j], target]);
//             }
//         }
//     }

//     return result;
// }



// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(possibleVacations) {
    // write your code in JavaScript (Node.js 8.9.4)
    const tripStarts = {};
    const tripEnds = {};
    
    possibleVacations.forEach((vacation, day) => {
        if (tripStarts[vacation] === undefined) {
            tripStarts[vacation] = Number.NEGATIVE_INFINITY;
        }
        
        tripStarts[vacation] = Math.max(day, tripStarts[vacation]);

        if (tripEnds[vacation] === undefined) {
            tripEnds[vacation] = Number.POSITIVE_INFINITY;
        }
        
        tripEnds[vacation] = Math.min(day, tripEnds[vacation]);

        console.log({tripStarts, tripStarts});
    });
}
