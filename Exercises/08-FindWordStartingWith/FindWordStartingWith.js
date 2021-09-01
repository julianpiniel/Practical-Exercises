const FindWordStartingWith = (book, query) => {
	const separators = {
		' ': true,
		'.': true,
		',': true,
	};
	const text = book.text.toLowerCase();
	const finds = [];
	for (let i = 0; i < text.length; i += 1) {
		if (i !== 0 && !separators[text[i - 1]]) continue;
		for (let j = 0; j < query.length; j += 1) {
			if (query[j] !== text[i + j]) {
				i += j;
				break;
			}
			if (j === query.length - 1) {
				finds.push(i);
				i += j;
			}
		}
	}
	return finds;
};

module.exports = FindWordStartingWith;
