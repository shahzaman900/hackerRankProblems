function countApplesAndOranges(s, t, a, b, apples, oranges) {
	// Write your code here
	let noOfapples = 0;
	let noOforanges = 0;

	let appLocation = apples.map((app) => {
		app = a + app;
		if (app >= s && app <= t) noOfapples++;
		return app;
	});

	let orangeLocation = oranges.map((ora) => {
		ora = b + ora;
		if (ora >= s && ora <= t) noOforanges++;
		return ora;
	});

	console.log(appLocation, orangeLocation, noOfapples, noOforanges);
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
