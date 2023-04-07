/*
 * Complete the 'beautifulDays' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER i
 *  2. INTEGER j
 *  3. INTEGER k
 */

function beautifulDays(i, j, k) {
	// Write your code here
	let beautifulDay = 0;
	for (let s = i; s <= j; s++) {
		let reverseNumber = s.toString().split("").reverse().join("");
		let diff = Math.abs(s - reverseNumber) % k;
		if (diff === 0) {
			beautifulDay += 1;
		}
	}
	return beautifulDay;
}

console.log(beautifulDays(20, 23, 6));

