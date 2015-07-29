function sumPrimes(num) {
    var count = 0,
        sum = 0;
    for (var i = 1; i <= num; i++) {
        for (var j = i; j !== 0; j--) {
            if (i % j === 0) count++;
        }
        if (count === 2) sum += i;
        count = 0;
    }
    return sum;
}

console.log(sumPrimes(10));