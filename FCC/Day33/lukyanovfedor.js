function steamroller(arr) {
  return arr.reduce(function(prev, current) {
	  return prev.concat(Array.isArray(current) ? steamroller(current) : current);
	}, []);
}

console.log(steamroller([1, [2], [3, [[4]]]]));