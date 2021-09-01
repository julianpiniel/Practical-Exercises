const DecimalToBinary = (num) => {
	let binary = '';
	while (num) {
		binary = (num % 2) + binary;
		num = Math.floor(num / 2);
	}
	return binary;
};
const DecimalToBinaryRec = (num) => {
	if (num) {
		return decimalToBinaryRec(Math.floor(num / 2)) + (num % 2);
	}
	return '';
};
module.exports = { DecimalToBinary, DecimalToBinaryRec };
