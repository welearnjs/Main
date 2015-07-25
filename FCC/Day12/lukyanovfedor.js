function mutation(arr) {
	var out;

  for (var i = 0; i < arr[1].length; i++) {
  	if (arr[0].indexOf(arr[1][i]) < 0) {
  		out = false;

  		break;
  	}

  	out = true;
  }

  return out;
}

console.log(mutation(['hello', 'hey']));