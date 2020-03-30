
export default function solution(queries, N) {
	const blocksCount = 0;
	const blocked = [
		new Array(N),
		new Array(N),
	];
	let r;
	let wasBlocked;
	queries.forEach(q => {
		blocked[q[0]][q[1]] = !blocked[q[0]][q[1]];
		// check diagonals and up/down cells
		// if match add/subtract blocksCount
		r = q[0] + 1 % 2;
		for (let c = Math.max(q[1] - 1, 0); c <= Math.min(q[1] + 1, N - 1); c++) {
			if (blocked[r][c]) {
				wasBlocked = true;
				break;
			}
		}

		if (wasBlocked) {
			blocksCount = blocked[q[0]][q[1]] ? +1 : -1;
		}
	});
}
