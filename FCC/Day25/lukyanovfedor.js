function unite() {
  var args = Array.prototype.slice.call(arguments), out = [];
  if (args.length < 2) {
  	throw new Error('Number of arrays should be 2 or more');
  }

  var all = args.reduce(function(prev, current) {
  	return prev.concat(current);
  }, out);

  return all.filter(function(item, indx, origin) {
  	return origin.indexOf(item) === indx;
  });
}

console.log(unite([1, 2, 3], [5, 2, 1, 4], [2, 1]));