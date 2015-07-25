function sumFibs(num) {

	var isPerfectSquere = function(n) {
		var sqrt = Math.sqrt(n) | 0;

    return Math.floor(sqrt*sqrt) === n;
	};

	var isFibo = function(n) {
		return isPerfectSquere(5*n*n + 4) || isPerfectSquere(5*n*n - 4);
	};

	var sum = 0;

	// cause of pair 1 in fibo
	if (num >= 1) {
		sum += 1;
	}

	while (num >= 0) {
		if (num % 2 == 1 && isFibo(num)) {
			sum += num;
		}

		num--;
	}

	return sum;
}

console.log(sumFibs(4));