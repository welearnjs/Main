function findLongestWord(str) {
  var wordArray = str.split(" ");
  var indexOfLongestWord = 0;

  for(var i = 0; i < wordArray.length; i++){
  		if(wordArray[i].length > wordArray[indexOfLongestWord].length) indexOfLongestWord = i;
  }

  return wordArray[indexOfLongestWord];
}