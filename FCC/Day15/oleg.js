/**
* Created with Test.
* User: Apaksimen
* Date: 2015-06-12
* Time: 11:25 AM
* To change this template use Tools | Templates.
*/
function destroyer(arr) {
   var b = [];
   var a1 = arguments[1];
   var a2 = arguments[2];  
   arr.filter(function(i) {
     return !(i === a1 | i === a2) ? b.push(i) : null; 
   });
  return b;
}

// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));