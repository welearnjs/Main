function translate(str) {
	var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];

	var addSufix = function(startsWithVowel) {
		return startsWithVowel ? str.join('') + 'way' : str.join('') + 'ay';
	};

	var checkVowel = function(char) {
		return vowels.indexOf(char.toLowerCase()) > -1;
	};

	str = str.split('');

	for (var i = 0; i < str.length; i++) {
		var isVowel = checkVowel(str[0]);

		if (i === 0 && isVowel) {
			return addSufix(true);
		}

		if (isVowel) {
			return addSufix();
		}

		str.push(str.shift());
	}

	return addSufix();
}

console.log(translate("consonant"));