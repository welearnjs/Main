function bouncer(arr) {
  	var resultArray = [];

  	for(var i = 0; i < arr.length; i++){
  		if(Boolean(arr[i])){
  			resultArray.push(arr[i]);
  		}
  	}

  	return resultArray;
}