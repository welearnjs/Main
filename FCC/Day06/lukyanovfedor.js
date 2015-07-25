function largestOfFour(arr) {
  return arr.map(function(a) {
  	return a.reduce(function(last, current) {
  		return current >= last ? current : last;
  	});
  });
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));