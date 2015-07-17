function diff(arr1, arr2) {
    var newArray = [];

    arr1.forEach(function(arg){
    	if (arr2.indexOf(arg) == -1) newArray.push(arg);
    });

	arr2.forEach(function(arg){
    	if (arr1.indexOf(arg) == -1) newArray.push(arg);
    });

    return newArray;
}