import {merge} from './mergeSort';
test('Merge two sorted halves #1', () => {
	const arr = [2, 5, 1, 9];
	const tempArr = new Array(arr.length);
	const middle = Math.floor(arr.length / 2);

	merge(arr, tempArr, 0, arr.length - 1)

  expect(tempArr).toEqual([1, 2, 5, 9]);
});

test('Merge two sorted halves #2', () => {
	const arr = [2, 4, 5, 1, 3, 9];
	const tempArr = new Array(arr.length);
	const middle = Math.floor(arr.length / 2);

	merge(arr, tempArr, 0, arr.length - 1)

  expect(tempArr).toEqual([1, 2, 3, 4, 5, 9]);
});

test('Merge two sorted halves #3', () => {
	const arr = [2, 4, 5, 6, 1, 3, 8, 9];
	const tempArr = new Array(arr.length);
	const middle = Math.floor(arr.length / 2);

	merge(arr, tempArr, 0, arr.length - 1)

  expect(tempArr).toEqual([1, 2, 3, 4, 5, 6, 8, 9]);
});
