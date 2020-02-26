import solution from './ NumberSolitaire';

test('Random arr test #1', () => {
	const arr = [1, -2, 0, 9, -1, -2];
  expect(solution(arr)).toEqual(8);
});
