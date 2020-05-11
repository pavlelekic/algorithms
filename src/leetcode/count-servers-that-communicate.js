/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function(grid) {
    let totalServersCount = 0;
    const rowCounts = new Array(grid.length);
    const colCounts = new Array(grid[0].length);

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === 1) {
                totalServersCount++;
                rowCounts[row] = typeof rowCounts[row] === 'undefined' ? 1 : rowCounts[row] + 1;
                colCounts[col] = typeof colCounts[col] === 'undefined' ? 1 : colCounts[col] + 1;
            }
        }
    }
    
    let isolatedServersCount = 0;
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === 1 && rowCounts[row] === 1 && colCounts[col] === 1) {
                isolatedServersCount++;
            }
        }
    }
    
    return totalServersCount - isolatedServersCount;
};