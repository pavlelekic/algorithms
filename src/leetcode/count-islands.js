function markIsland(grid, row, col) {
    // console.log(row, col);
    if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length || grid[row][col] === '0') return;
    grid[row][col] = '0';
    markIsland(grid, row - 1, col);
    markIsland(grid, row, col - 1);
    markIsland(grid, row + 1, col);
    markIsland(grid, row, col + 1);
}

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (!Array.isArray(grid) || !Array.isArray(grid[0])) return 0;
    const numCols = grid[0].length;
    let count = 0;
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < numCols; col++) {
            if (grid[row][col] === '1') {
                count++;
                markIsland(grid, row, col);
            }
        }
    }
    return count;
};
