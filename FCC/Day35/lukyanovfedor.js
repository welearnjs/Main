function every(collection, pre) {
  for (var i = 0; i < collection.length; i++) {
  	if (!collection[i].hasOwnProperty(pre)) {
  		return false;
  	}
  }

  return true;
}

console.log(every([{'user': 'Tinky-Winky', 'sex': 'male'}, {'user': 'Dipsy', 'sex': 'male'}, {'user': 'Laa-Laa', 'sex': 'female'}, {'user': 'Po', 'sex': 'female'}], 'sex'));