function largestOfFour(arr) {
	var largestNumber = 0;

	for(var i = 0; i < arr.length; i++){
		for(var j = 0; j < arr[i].length; j++){
			if(arr[i][j] > largestNumber) largestNumber = arr[i][j];
		}
	}

	return largestNumber;
}