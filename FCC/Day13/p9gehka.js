function where(collection, source) {
 return collection.filter(function (item) {
   var key;

   for (key in source) {
     if (source[key] !== item[key]) {return; }
   }
   return item;
 });
}