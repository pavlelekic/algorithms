
export const convertStringToMatrix = (stringInput) => {
	const lines = stringInput.split("\n");

	return lines.map(l => {
		const row = [];
		for (let i = 0; i < l.length; i++) {
			row.push(l.charAt[i]);
		}
		return row;
	});
};
