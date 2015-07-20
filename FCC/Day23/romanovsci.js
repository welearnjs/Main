
function fearNotLetter(str) {
  var letterArray = str.toLowerCase().split('');
  var firstLetter = letterArray[0];
  var lastLetter = letterArray[letterArray.length - 1];
  var resultString = "";

  for(var i = firstLetter.charCodeAt(0); i < lastLetter.charCodeAt(0); i++){
  	if(letterArray.indexOf(String.fromCharCode(i)) < 0){
  		resultString += String.fromCharCode(i);
  	}
  }

  return resultString == "" ? undefined : resultString;
}


alert(fearNotLetter('aBcE'));