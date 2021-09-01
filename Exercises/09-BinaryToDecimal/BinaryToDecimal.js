const BinaryToDecimal = (binary) => {
	let sum = 0;
	for (let i = 0; i < binary.length; i += 1) {
		sum += Math.pow(2, binary.length - (i + 1)) * binary[i];
	}
	return sum;
};

const BinaryToDecimalRec = (binary) => {
	const sum = Math.pow(2, binary.length - 1) * binary[0];
	if (binary.length !== 1) {
		return sum + binaryToDecimalRec(binary.slice(1));
	}
	return sum;
};

module.exports = { BinaryToDecimal, BinaryToDecimalRec };
