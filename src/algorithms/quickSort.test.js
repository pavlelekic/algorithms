import quickSort from './quickSort';

test('Random arr test #1', () => {
	const arr = [6, 3, 1, 7, 2, 9, 0, 6, 7, 7, 7, 4, 2, 8, 6, 3, 2, 2, 4, 1];
	const arrClone = arr.slice();
	arrClone.sort((a, b) => a - b);

	console.log({arr, arrClone});

	quickSort(arr);
  expect(arr).toEqual(arrClone);
});
