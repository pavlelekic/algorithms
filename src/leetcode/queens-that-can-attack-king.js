
function calcAscendingDiagC(x, y) {
    // y = x + c  => c = y - x
    return y - x;
}

function calcDescendingDiagC(x, y) {
    // y = -x + c  => c = y + x
    return y + x;
}

export default function solution(queens, king) {
    const kingAscC = calcAscendingDiagC(king[0], king[1]);
    const kingDescC = calcDescendingDiagC(king[0], king[1]);

    const killerQueens = [];
    let q;
    for (let i = 0; i < queens.length; i++) {
        q = queens[i];
        if (
            q[0] === king[0] || // horiz
            q[1] === king[1] || // vertical
            kingAscC === calcAscendingDiagC(q[0], q[1]) || // diag /
            kingDescC === calcDescendingDiagC(q[0], q[1]) // diag \
        ) {
            killerQueens.push(q);
        }
    }

    return killerQueens;
}
