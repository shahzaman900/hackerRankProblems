function minimumNumber(n, password) {
	// Return the minimum number of characters to make the password strong
	let numbers = "0123456789";
	let lower_case = "abcdefghijklmnopqrstuvwxyz";
	let upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	let special_characters = "!@#$%^&*()-+";

	let char_type = {
		numbers: false,
		lower_case: false,
		upper_case: false,
		special_characters: false,
	};

	for (let i = 0; i < n; i++) {
		let char_val = password[i];
		if (numbers.includes(char_val)) {
			char_type.numbers = true;
			continue;
		}

		if (lower_case.includes(char_val)) {
			char_type.lower_case = true;
			continue;
		}

		if (upper_case.includes(char_val)) {
			char_type.upper_case = true;
			continue;
		}

		if (special_characters.includes(char_val)) {
			char_type.special_characters = true;
			continue;
		}
	}

	let count = 0;

	for (const [key, value] of Object.entries(char_type)) {
		if (value == false) count += 1;
	}
	let remainder = 6 - (n + count);
	if (remainder > 0) count += remainder;

	return count;
}
minimumNumber(4, "pP@1");
