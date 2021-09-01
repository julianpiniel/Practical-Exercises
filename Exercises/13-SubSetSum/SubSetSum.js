const subsetSum = (nums, target) => {
	const sums = new Set([0]);
	return nums.some((num) => {
		const copySums = [...sums];
		for (let sum of copySums) {
			const newSum = sum + num;
			if (target === newSum) return true;
			if (newSum < target) sums.add(newSum);
		}
	});
};

module.exports = subsetSum;
