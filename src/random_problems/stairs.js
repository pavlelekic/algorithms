// how many distincs ways you can climb to the top
// you can climbe 1 or 2 steps at a time

export default function solution(N) {
	let current;
	let previous1 = 1;
	let previous2 = 2;
	for(let i = 3; i <= N; i++) {
		current = previous1 + previous2;
		previous2 = previous1;
		previous1 = current;
	}
	return current;
}