function where(arr, num) {
  arr.sort(function(a,b){
  		return a-b;
  });

  for(var i in arr){
  	if(arr[i] > num)
  		return i
  }

  return -1;
}