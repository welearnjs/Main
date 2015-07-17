function replace(str, before, after) {
	var wordsArray = str.split(" ");
	var replaceIndex = wordsArray.indexOf(before);
	var firstLater = "";

	if(replaceIndex >= 0){
		firstLater = wordsArray[replaceIndex].charAt(0);
		var replace = after;
		if(firstLater.toUpperCase() == wordsArray[replaceIndex].charAt(0))
			replace = after.charAt(0).toUpperCase() + after.slice(1);

		wordsArray[replaceIndex] = replace;
	}

	return wordsArray.join(" ");
}
