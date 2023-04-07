function timeConversion(s) {
	let hours = s.slice(0, 2);
	let remaining = s.slice(2);
	let amPm = s.slice(-2);
	let minutesAndSeconds = remaining.slice(0, 6);

	if (hours === "12" && amPm === "PM") {
		return hours.concat(minutesAndSeconds);
	} else if (parseInt(hours) < 12 && amPm === "PM") {
		hours = (12 + parseInt(hours)).toString();
		return hours.concat(minutesAndSeconds);
	}

	if (hours === "12" && amPm === "AM") {
		hours = "00";
		return hours.concat(minutesAndSeconds);
	} else if (parseInt(hours) < 12 && amPm === "AM") {
		return hours.concat(minutesAndSeconds);
	}
}

console.log(timeConversion("12:00:00PM"));
