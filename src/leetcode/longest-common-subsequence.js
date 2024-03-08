/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */

var longestCommonSubsequence = function (text1, text2) {
  const leftString = text2;
  const topString = text1;
  const rows = leftString.length;
  const cols = topString.length;

  // initialize lengthMap
  const lengthMap = new Array(rows);
  for (let i = 0; i < rows; i++) {
    lengthMap[i] = new Array(cols);
  }

  const getLength = (row, col) =>
    row < 0 || col < 0 ? 0 : lengthMap[row][col];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (topString.charAt(c) === leftString.charAt(r)) {
        lengthMap[r][c] = 1 + getLength(r - 1, c - 1);
      } else {
        lengthMap[r][c] = Math.max(getLength(r, c - 1), getLength(r - 1, c));
      }
    }
  }

  return lengthMap[rows - 1][cols - 1];
};
