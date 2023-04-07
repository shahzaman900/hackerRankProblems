/*
 * Complete the 'kangaroo' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER x1
 *  2. INTEGER v1
 *  3. INTEGER x2
 *  4. INTEGER v2
 */

function kangaroo(x1, v1, x2, v2) {
	// Write your code here

	let print = "";
	for (let index = 0; index < 10000; index++) {
		x1 += v1;
		x2 += v2;

		if (x1 === x2) {
			print = "YES";
			break;
		} else if (x1 !== x2) {
			print = "NO";
		}
	}
	return print;
}

console.log(kangaroo(0, 2, 5, 3));
