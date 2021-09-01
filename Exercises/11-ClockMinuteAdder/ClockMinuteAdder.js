const clockMinuteAdder = (time, minutesToAdd) => {
	// Separo las horas y los minutos
	const [hours, minutes] = time.split(':');

	// agrego el total de minutos y el total de horas
	const totalMinutes = minutesToAdd + parseInt(minutes);
	const totalHours = Math.floor(totalMinutes / 60) + parseInt(hours);

	// saco las nuevas horas y minutos
	const newHours = ((totalHours - 1) % 12) + 1; // para que no quede 0hrs
	const newMinutes = totalMinutes % 60;

	// le agrego formato de ceros adelante si es necesario
	const formatHours = newHours > 9 ? newHours : `0${newHours}`;
	const formatMinutes = newMinutes > 9 ? newMinutes : `0${newMinutes}`;

	//devuelvo la nueva hora
	return `${formatHours}:${formatMinutes}`;
};

module.exports = clockMinuteAdder;
