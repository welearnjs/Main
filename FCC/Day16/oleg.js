/**
* Created with Test.
* User: Apaksimen
* Date: 2015-06-12
* Time: 11:25 AM
* To change this template use Tools | Templates.
*/
function where(arr, num) {
  // filter only highest
  var a = arr.filter(function(i){
       return i >= num;
  }); 
  return arr.indexOf(a[0]);
}

// console.log(where([40, 60], 50));
// console.log(where([10, 20, 40, 50], 30));
// console.log(where([10, 20, 30, 40, 50], 30));
