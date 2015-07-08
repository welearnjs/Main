function slasher(arr, howMany) {
 if(!howMany) {return arr};
 arr.shift();
 return slasher(arr, howMany - 1);
}