function sockMerchant(ar) {
	const object = {};
	ar.forEach((element) => {
      object[element] = (object[element] || 0) + 1;
		console.log(object[element]);
	});

	return object;
}

console.log(sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20]));
