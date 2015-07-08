function mutation(arr) {
 var reg;

 return arr[1].split('').every(function (item) {
   reg = new RegExp(item, "ig");
   return arr[0].match(reg) && !!(arr[1].match(reg).length === arr[0].match(reg).length);
 });

}