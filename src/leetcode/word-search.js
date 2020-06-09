// [
//     ["A","B","C","E"],
//     ["S","F","E","S"],
//     ["A","D","E","E"]
// ]
// "ABCESEEEFS"

// { row: 0, col: 0, word: 'ABCESEEEFS', charIndex: 0, ch: 'A' }
// { row: 0, col: 1, word: 'ABCESEEEFS', charIndex: 1, ch: 'B' }
// { row: 0, col: 2, word: 'ABCESEEEFS', charIndex: 2, ch: 'C' }
// { row: 1, col: 2, word: 'ABCESEEEFS', charIndex: 3, ch: 'E' }
// { row: 1, col: 3, word: 'ABCESEEEFS', charIndex: 4, ch: 'S' }
// { row: 2, col: 3, word: 'ABCESEEEFS', charIndex: 5, ch: 'E' }
// { row: 2, col: 2, word: 'ABCESEEEFS', charIndex: 6, ch: 'E' }
// { row: 0, col: 3, word: 'ABCESEEEFS', charIndex: 5, ch: 'E' }
// { row: 2, col: 0, word: 'ABCESEEEFS', charIndex: 0, ch: 'A' }

function dfs(board, row, col, word, charIndex, used) {
    const key = `${row}:${col}`;
    if (
        row < 0 || col < 0 || row >= board.length || col >= board[0].length ||
        word.charAt(charIndex) !== board[row][col] ||
        used[key]
    ) return false;
    
    used[key] = true;
    // console.log({row, col, word, charIndex, ch: word.charAt(charIndex)});
    if (
        charIndex === word.length - 1 ||
        dfs(board, row + 1, col, word, charIndex + 1, used) ||
        dfs(board, row, col + 1, word, charIndex + 1, used) ||
        dfs(board, row, col - 1, word, charIndex + 1, used) ||
        dfs(board, row - 1, col, word, charIndex + 1, used)
    ) {
        return true;
    }
    used[key] = false;
    return false;
}

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    if (word === "") return true;
    if (board.length === 0 || board[0].length === 0) return false;
    const firstChar = word.charAt(0);
    
    let colLength = board[0].length;
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < colLength; col++) {
            if (dfs(board, row, col, word, 0, {})) {
                return true;
            }
        }
    }
    
    return false;
};