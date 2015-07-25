function where(arr, num) {
  var index;

  arr.forEach(function(elem, indx) {
    if (elem <= num) {
      index = indx;
    }
  });

  return index + 1;
}

console.log(where([40, 60], 70));
