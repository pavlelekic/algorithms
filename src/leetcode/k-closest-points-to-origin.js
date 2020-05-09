/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
const compare = (a, b) => a[0] * a[0] + a[1] * a[1] - b[0] * b[0] - b[1] * b[1];

var kClosest = function(points, K) {
    points.sort(compare);
    const result = [];
    
    for (let i = 0; i < K; i++) result.push(points[i]);
    
    return result;
};
