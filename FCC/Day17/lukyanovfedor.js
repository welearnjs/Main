function sumAll(arr) {
	var min = Math.min.apply(null, arr),
			max = Math.max.apply(null, arr),
			sum = 0,
			i;

	for (i = min; i <= max; i++) {
		sum += i;
	}

	return sum;
}

console.log(sumAll([1, 4]));