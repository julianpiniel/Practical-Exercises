function longestIncreasingSubsequence(
	nums,
	index = 0,
	base = -Infinity,
	memo = {}
) {
	if (index === nums.length) return 0;
	const whenExcluded = memoLis(nums, index + 1, base, memo);
	if (nums[index] <= base) return whenExcluded;
	let whenIncluded;
	if (memo.hasOwnProperty(index)) whenIncluded = memo[index];
	else {
		whenIncluded = 1 + memoLis(nums, index + 1, nums[index], memo);
		memo[index] = whenIncluded;
	}
	return Math.max(whenIncluded, whenExcluded);
}

module.exports = longestIncreasingSubsequence;
