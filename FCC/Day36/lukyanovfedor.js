function add() {

  var checkValid = function(n) {
  	if (!isNaN(parseFloat(n)) && isFinite(n)) {
  		return n;
  	}

  	throw new Error('Unvalid number');
  };

  var args = Array.prototype.slice.call(arguments);

  if (args.length === 2) {
  	return checkValid(args[0]) + checkValid(args[1]);
  } else if (args.length) {
  	return function(n) {
  		return checkValid(args[0]) + checkValid(n);
  	};
  }
}