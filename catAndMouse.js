function catAndMouse(x, y, z) {
	let cataFromMouse = Math.abs(z - x);
	let catbFromMouse = Math.abs(z - y);

	if (cataFromMouse < catbFromMouse) {
		return "Cat A";
	}

	if (catbFromMouse < cataFromMouse) {
		return "Cat B";
	}

	if (catbFromMouse === cataFromMouse) {
		return "Mouse C";
	}
}

catAndMouse(1, 3, 2);
