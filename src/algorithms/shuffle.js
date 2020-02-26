import swap from './swap';

export default function shuffle(arr) {
	for (let i = 0; i < arr.length; i++) {
		swap(i, i + Math.round((arr.length - 1 - i) * Math.random()), arr);
	}
}
