function smallestCommons(arr) {
  var min = Math.min.apply(null, arr),
  		max = Math.max.apply(null, arr),
  		nums = [],
  		smallest = 1,
  		lastResult = false,
  		i;

  for (; min <= max; min++) {
  	nums.push(min);
  }

  while (smallest >= 0) {

  	for (i = 0; i < nums.length; i++) {
  		if (smallest % nums[i] !== 0) {
  			lastResult = false;
  			break;
  		}

  		lastResult = true;
  	}

  	if (lastResult) {
  		return smallest;
  	} else {
  		++smallest;
  	}

  }
}

console.log(smallestCommons([1,5]));