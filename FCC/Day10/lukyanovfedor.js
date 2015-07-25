function chunk(arr, size) {
	var out = [],
			start = 0,
  		parts = Math.round(arr.length / size);

  while (start < parts) {
  	out.push(arr.splice(0, size));

  	++start;
  }

  return out;
}

console.log(chunk(['a', 'b', 'c', 'd'], 2));