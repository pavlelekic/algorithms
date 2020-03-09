
export function testSort(arr, sortFn) {
	const cloneSorted = arr.slice();
	cloneSorted.sort((a, b) => a - b);
	sortFn(arr);
  expect(arr).toEqual(cloneSorted);
}

