function find(arr, func) {
	return arr.filter(func)[0];
}

console.log(find([1, 2, 3, 4], function(num){ return num % 2 === 0; }));