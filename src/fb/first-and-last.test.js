import solution from './first-and-last';

test('Test f&l #1', () => {
	const arr = [2, 3, 6, 7, 7, 8, 8, 8, 12];
	expect([5, 7]).toEqual(solution(arr, 8));
});

test('Test f&l #2', () => {
	const arr = [2, 3, 6, 7, 7, 8, 8, 8, 12];
	expect([-1, -1]).toEqual(solution(arr, -1));
});

