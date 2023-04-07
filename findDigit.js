function findDigits(n) {
// Write your code here
	let count = 0;
	let devisors = String(n).split("");

	devisors.forEach((digit) => {
		if (n % digit === 0) {
			count = count + 1;
		}
	});
}

findDigits(124);