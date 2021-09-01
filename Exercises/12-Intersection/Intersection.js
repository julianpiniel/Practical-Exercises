function intersection(arr1, arr2) {
	let index1 = 0;
	let index2 = 0;
	const result = [];
	while (index1 < arr1.length && index2 < arr2.length) {
		if (arr1[index1] === arr2[index2]) {
			result.push(arr1[index1]);
			index1 += 1;
			index2 += 1;
		} else if (arr1[index1] < arr2[index2]) index1 += 1;
		else index2 += 1;
	}
	return result;
}

module.exports = intersection;
