function drop(arr, func) {
  for (var i = 0; i < arr.length; i++) {
  	if (func(arr[0])) {
  		break;
  	}

  	arr.splice(0, 1);
  }

  return arr;
}

console.log(drop([1, 2, 3], function(n) {return n > 2; }));