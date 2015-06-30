/**
* Created with Test.
* User: Apaksimen
* Date: 2015-06-12
* Time: 11:25 AM
* To change this template use Tools | Templates.
*/
function palindrome(str) {
  var re = /\s|[.,]/gi;
  var nStr = str.replace(re, '').toLowerCase();
  var jStr = nStr.split('').reverse().join('');
  return (jStr === nStr) ? true : false;
}
// console.log(palindrome("A man, a plan, a canal. Panama"));
// 
// 
// 
// 
function palindromeTwo(str) {
  str = str.split('').filter(function(i) {
    return i.match(/[A-Za-z]/);
  }).join('').toLowerCase();

  if (str === str.split('').reverse().join('')) {
    return true;
  }
  return false;
}

// console.log(palindromeTwo('A man, a plan, a canal. Panama')); // true
