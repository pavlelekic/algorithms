
export default function solution(rowIndex) {
    const row = [1];
    for (let i = 1; i <= rowIndex; i++) {
        for (let j = row.length; j > 1; j--) {
            row[j] = j === row.length ? 1 : row[j] + row[j - 1];
        }
    }

    return row;
}
