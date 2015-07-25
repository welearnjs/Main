function where(collection, source) {
	return collection.filter(function(item) {
		var status, key;

		for (key in source) {
			if (item[key] === source[key]) {
				status = true;
			} else {
				status = false;

				break;
			}
		}

		return status;
	});
}

var data = [
	{ first: 'Romeo', last: 'Montague' },
	{ first: 'Mercutio', last: null },
	{ first: 'Tybalt', last: 'Capulet' }
];
console.log(where(data, { last: 'Capulet' }));
