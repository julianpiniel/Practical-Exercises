const MaxValue = (stocks) => {
	// guardamos la primer diferencia
	let max = stocks[1] - stocks[0];
	// guardamos el precio mínimo hasta el momento
	let minPrice = stocks[0];
	// iteramos sobre las stocks
	for (let i = 1; i < stocks.length; i += 1) {
		// sacamos la ganacia potencial
		const potencial = stocks[i] - minPrice;
		// Nos quedamos con el mayor valor
		max = Math.max(max, potencial);
		// nos quedamos con el precio mínimo
		minPrice = Math.min(minPrice, stocks[i]);
	}
	// devolvemos el máximo
	return max;
};

module.exports = MaxValue;
