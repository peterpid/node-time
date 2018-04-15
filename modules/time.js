function toMinutes(seconds) {
	return Math.floor(seconds / 60);	
}

function toHours(seconds) {
	return Math.floor(seconds / 60 / 60);
}

function toDays(seconds) {
	return Math.floor(seconds / 60 / 60 / 24);
}

module.exports = {
	toMinutes: toMinutes,
	toHours:   toHours,
	toDays:    toDays
};