
function isSomewhatSimilar(strA, strB) {
	if (Math.abs(strA.length - strB.length) !== 1) return false;
	const smaller = strA.length < strB.length ? strA : strB;
	const larger = strA.length < strB.length ? strB : strA;

	let longerStringIndex = 0;
	let skippedChar = false;
	for (let i = 0; i < smaller.length; i++) {
		if (smaller[i] !== larger[longerStringIndex++]) {
			if (skippedChar) return false;
			i--;
			skippedChar = true;
		}
	}
	return true;
}

function dfsChainLengthLookup(str, visited, strings, startingIndexForLength) {
	visited[str] = true;
	if (typeof startingIndexForLength[str.length + 1] === 'undefined') {
		return 0;
	}

	let maxChainLength = 0;
	for (let i = startingIndexForLength[str.length + 1]; strings[i].length === str.length + 1; i++) {
		if (isSomewhatSimilar(strings[i], str)) {
			maxChainLength = Math.max(1 + dfsChainLengthLookup(strings[i], visited, strings, startingIndexForLength), maxChainLength);
		}
	}

	return maxChainLength;
}

export default function solution(input) {
	const visited = {};
	const strings = input.split("\n"); // n
	strings.sort((a, b) => a.length <= b.length); // n*logn
	const startingIndexForLength = {};
	strings.forEach((l, i) => {
		if (typeof startingIndexForLength[l.length] === 'undefined') {
			startingIndexForLength[l.length] = i;
		}
	});

	let maxChainLength = 0;
	strings.forEach(str => {
		if (!visited[str]) {
			visited[str] = true;

			// check all strings length + 1 if they are almost equal recursively and return chain length
			maxChainLength = Math.max(dfsChainLengthLookup(str, visited, strings, startingIndexForLength), maxChainLength);
		}
	});

	return maxChainLength;
}
