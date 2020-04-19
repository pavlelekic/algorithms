
function dfs(cache, grid, row, col) {
    if (row < 0 || col < 0) return Number.POSITIVE_INFINITY;
    if (row === 0 && col === 0) return grid[row][col];

    const cacheKey = `${row}:${col}`;

    if (!cache[cacheKey]) {
        cache[cacheKey] = grid[row][col] + Math.min(
            dfs(cache, grid, row - 1, col),
            dfs(cache, grid, row, col - 1),
        );
    }

    return cache[cacheKey];
}

export default function minPathSum(grid) {
    if (!Array.isArray(grid) || grid.length === 0) return 0;

    const cache = {};
    return dfs(cache, grid, grid.length - 1, grid[0].length - 1);
}