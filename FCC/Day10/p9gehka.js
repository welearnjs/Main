function chunk(arr, size) {
 var result, smallArr;
 result = [];
 smallArr = [];
 arr.forEach(function (item, i) {
   smallArr.push(item);
   if (i === arr.length - 1) {
     result.push(smallArr);
     return;
   }
   if (!((i + 1) % size)) {
     result.push(smallArr);
     smallArr = [];
   }
 });
 return result;
}