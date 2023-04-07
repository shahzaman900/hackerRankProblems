function rotateLeft(d, arr) {
	// Write your code here
	for (let i = 0; i <= d; i++) {
		arr.push(arr.shift());
	}
	return arr;

	// while (d) {
	// 	arr.push(arr.shift());
	// 	d--;
	// }
	// return arr;
}

rotateLeft(2, [1, 2, 3, 4, 5]);
