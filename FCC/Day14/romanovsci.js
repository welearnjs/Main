function where(collection, source) {
 var arr = [];
 
for(var i = 0; i < collection.length; i++){
	var last = collection[i].last;
	var sourceLast = source.last;
	if(sourceLast === last){
		arr.push(collection[i]);
	}
}

 return arr;
}