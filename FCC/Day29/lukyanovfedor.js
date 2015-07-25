function sumPrimes(num) {
	var count = num - 1;

	var isPrime = function(n) {
		for(var i = 2; i < n; i++) {
			if (n % i === 0) {
				return false;
			}
		}

		return n > 1;
	};

	var sum = 0;

	while (count >= 0) {
		if (isPrime(count)) {
			sum += count;
		}

		count--;
	}

	return sum + num;
}

console.log(sumPrimes(10));