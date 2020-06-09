function areOverlapping(intervalA, intervalB) {
    return (intervalA[0] >= intervalB[0] && intervalA[0] <= intervalB[1]) ||
        (intervalA[1] >= intervalB[0] && intervalA[1] <= intervalB[1]) ||
        (intervalA[0] < intervalB[0] && intervalA[1] > intervalB[1]);
}

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length < 2) return intervals;
    
    const resultSet = [];
    let didOverlap;
    let current;
    let testInterval;
    while(intervals.length > 0) {
        current = intervals.pop();
        didOverlap = false;
        for(let i = 0; i < intervals.length; i++) {
            testInterval = intervals[i];
            // console.log(current, testInterval);
            if (areOverlapping(testInterval, current)) {
                // console.log('did overlap');
                didOverlap = true;
                testInterval[0] = Math.min(testInterval[0], current[0]);
                testInterval[1] = Math.max(testInterval[1], current[1]);
                break;
            }
        }
        if (!didOverlap) {
            resultSet.push(current);
        }
    }
    
    return resultSet;
};