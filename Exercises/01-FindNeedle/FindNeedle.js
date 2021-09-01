function findNeedle(haystack, needle) {
	// iterar sobre el haystack
	for (let i = 0; i < haystack.length; i += 1) {
		// si la substring matchea el neddle podemos devoler el valor de i
		if (haystack.slice(i, i + needle.length) === needle) {
			return i;
		}
	}
	return -1;
}

module.exports = findNeedle;
