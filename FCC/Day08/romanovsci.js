function repeat(str, num) {
 	if(num < 0) return "";

 	var repeat = "";

 	for(var i = 0; i < num; i++){
 		repeat = repeat + str;
 	}

 	return repeat;
}