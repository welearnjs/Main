/**
* Created with Test.
* User: Apaksimen
* Date: 2015-06-12
* Time: 11:25 AM
* To change this template use Tools | Templates.
*/
function repeat(str, num) {
  var rep = "";
  for (var i = 0 ; i < num; i++) {
    rep = rep + str;
  }
  return rep;
}

// console.log(repeat('abc', 3));