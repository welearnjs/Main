function diff(arr1, arr2) {
	var out = [];

  arr1.concat(arr2).forEach(function(item) {
  	var outIndx = out.indexOf(item);

  	if (outIndx >= 0) {
  		out.splice(outIndx, 1);
  	} else {
  		out.push(item);
  	}
  });

  return out;
}

console.log(diff([1, 2, 3, 5], [1, 2, 3, 4, 5]));