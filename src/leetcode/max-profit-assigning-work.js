/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */

// function maxProfit(difficulties, profits, workers, workerIndex, sumSoFar, cache) {
//     if (workerIndex === workers.length) {
//         return sumSoFar;
//     }
    
//     if (typeof cache[workerIndex] === 'undefined') {
//         let bestProfit = 0;

//         for (let i = 0; i < difficulties.length; i++) {
//             if (workers[workerIndex] >= difficulties[i]) {
//                 bestProfit = Math.max(
//                     bestProfit,
//                     maxProfit(difficulties, profits, workers, workerIndex + 1, sumSoFar + profits[i], cache)
//                 );
//             }
//         }

//         cache[workerIndex] = bestProfit;
//     }

//     return cache[workerIndex];
// }

var maxProfitAssignment = function(difficulties, profits, workers) {
    // return maxProfit(difficulties, profits, workers, 0, 0, {});
    
    //greedy solution
    
    const difProf = difficulties.map((d, i) => ({
        difficulty: d,
        profit: profits[i]
    }));
    
    difProf.sort((a, b) => b.profit - a.profit);
    
    let maxProfit = 0;
    workers.forEach(worker => {
        for (let i = 0; i < difProf.length; i++) {
            if (worker >= difProf[i].difficulty) {
                maxProfit += difProf[i].profit;
                break;
            }
        }
    });
    return maxProfit;
};
