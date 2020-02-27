import solution from './MinAbsSum';

test('Random arr test #1', () => {
	const arr = [1, 5, 2, -2];
  expect(solution(arr)).toEqual(0);
});
