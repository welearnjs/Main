function repeat(str, num) {
	var out = "";

	while (num !== 0) {
		out += str;

		--num;
	}

	return out;
}

console.log(repeat('abc', 3));