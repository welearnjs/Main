function titleCase(str) {
  var wordArray = str.split(" ");

  for(var i = 0; i < wordArray.length; i++){
  	var tmp = wordArray[i].charAt(0).toUpperCase() + wordArray[i].slice(1);
  	wordArray[i] = tmp;
  }

  return wordArray.join(" ");
}