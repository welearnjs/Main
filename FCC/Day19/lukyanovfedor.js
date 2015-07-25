function convert(num) {
	var nums = [
		{
			value: 1000,
			sign: 'M',
		},
		{
			value: 900,
			sign: 'CM',
		},
		{
			value: 500,
			sign: 'D',
		},
		{
			value: 400,
			sign: 'CD',
		},
		{
			value: 100,
			sign: 'C',
		},
		{
			value: 90,
			sign: 'XC',
		},
		{
			value: 50,
			sign: 'L',
		},
		{
			value: 40,
			sign: 'XL',
		},
		{
			value: 10,
			sign: 'X',
		},
		{
			value: 9,
			sign: 'IX',
		},
		{
			value: 5,
			sign: 'V',
		},
		{
			value: 4,
			sign: 'IV',
		},
		{
			value: 1,
			sign: 'I',
		}
	];

	var out = '';

	nums.forEach(function(item) {
		while (num >= item.value) {
	    out += item.sign;
	    num -= item.value;
	  }
	});

	return out;
}

console.log(convert(36));