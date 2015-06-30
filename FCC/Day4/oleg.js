/**
* Created with Test.
* User: Apaksimen
* Date: 2015-06-12
* Time: 11:25 AM
* To change this template use Tools | Templates.
*/
function findLongestWord(str) {
  var n = str.split(' '), a = [];
  for (var i = 0; i < n.length; i++) { 
    a.push(n[i].length);
  }
  return Math.max.apply(null, a);
}

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
