function destroyer(arr) {
  var resultArr = [];
  var tempArr = arr;

  for(var arrIndex = 0; arrIndex < arr.length; arrIndex++){
  		for(var i = 1; i < arguments.length; i++){
  			if(tempArr[arrIndex] == arguments[i]){
  				tempArr[arrIndex] = null;
  			}
  		}
  }

  for(var i in tempArr){
  	if(tempArr[i] != null)
  		resultArr.push(tempArr[i]);
  }

  return resultArr;
}
