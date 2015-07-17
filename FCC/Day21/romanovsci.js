function translate(str) {
	 var consonant = [ 'B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'X', 'W', 'Z',
	 				   'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'x', 'w', 'z'];

	 var strLatters = str.split('');

	 for(var i = 0; i < strLatters.length; i++){
	 	if(consonant.indexOf(strLatters[i]) >= 0){
	 		strLatters.push(strLatters.shift());
	 		i--;
	 	}else{
	 		break;
	 	}
	 }

	 return strLatters.join('') + "ay";
}