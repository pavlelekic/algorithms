import {testSort} from './sortHelpers';
import quicksort from './quickSort2';

// test('Test sorting #1', () => {
// 	const arr = [5, 3, 4];
// 	testSort(arr, quicksort);
// });

// test('Test sorting #2', () => {
// 	const arr = [2, 5, 1, 9];
// 	testSort(arr, quicksort);
// });

test.skip('Test sorting #2', () => {
	const arr = [1, 0, 1, 9];
	testSort(arr, quicksort);
});