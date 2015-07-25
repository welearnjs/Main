function replace(str, before, after) {
	return str.split(' ').map(function(word) {
		var afterCopy = after;

		if (word.toLowerCase() !== before) {
			return word;
		}

		if (before[0].toUpperCase() === word[0]) {
			afterCopy = afterCopy[0].toUpperCase() + afterCopy.slice(1);
		}

		return afterCopy;
	}).join(' ');
}

console.log(replace("A quick brown fox jumped Jumped over the lazy dog", "jumped", "leaped"));