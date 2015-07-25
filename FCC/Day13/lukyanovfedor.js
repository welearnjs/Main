function bouncer(arr) {
  return arr.filter(function(item) {
  	return !!item;
  });
}
console.log(bouncer([7, 'ate', '', false, 9]));