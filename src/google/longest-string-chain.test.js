import solution from './longest-string-chain';

test.skip('Test lst #1', () => {
	const input = `a
	ab
	ba
	bda
	b
	bdca
	bca`;
	expect(4).toEqual(solution(input));
});
