function toMinutes(seconds) {
	return Math.floor(seconds / 60);	
}

function toHours(seconds) {
	return Math.floor(seconds / 60 / 60);
}

function toDays(seconds) {
	return Math.floor(seconds / 60 / 60 / 24);
}

function toTime(seconds) {
	let days = toDays(seconds);
    let hours = toHours(seconds) % 24;
    let minutes = toMinutes(seconds) % 60;
    return {days, hours, minutes};
}

function toTimeStr(seconds) {
	let time = toTime(seconds);
    let timeStr =  (time.days > 0)?time.days + 'd':'';
    timeStr += (time.hours > 0)?' ' + time.hours + 'h':'';
    timeStr += (time.minutes > 0)?' ' + time.minutes + 'min':'';
    return timeStr;
}

module.exports = {
	toMinutes: toMinutes,
	toHours:   toHours,
	toDays:    toDays,
	toTime:    toTime,
	toTimeStr: toTimeStr
};