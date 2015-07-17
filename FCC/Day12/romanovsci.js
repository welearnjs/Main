function mutation(arr) {
  for(var i = 0; i < arr[1].length; i++){
  	if( !(arr[0].includes(arr[1].charAt(i))) )
  		return false;
  }

  return true;
}