function findLongestWord(str) {
	return str.split(" ").reduce(function(last, current) {
		return current.length >= last.length ? current : last;
	}).length;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
