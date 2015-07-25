function fearNotLetter(str) {
	var first = str[0],
			last = str[str.length - 1],
			out = '',
			i;

	for (i = first.charCodeAt(0); i <= last.charCodeAt(0); i++) {
		out += String.fromCharCode(i);
	}

	return out === str ? undefined : out;
}

console.log(fearNotLetter('abce'));