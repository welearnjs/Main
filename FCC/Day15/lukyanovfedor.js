function destroyer(arr) {
	var args = Array.prototype.splice.call(arguments, 1);

	return arr.filter(function(item) {
		return args.indexOf(item) < 0;
	});
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));