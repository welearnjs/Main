/**
* Created with Test.
* User: Apaksimen
* Date: 2015-06-12
* Time: 11:25 AM
* To change this template use Tools | Templates.
*/
function bouncer(arr) {
  return arr.filter(function(item) {
    return (!item) ? item : item;
  });
}
// console.log(bouncer([null, 0]));
// console.log(bouncer([7, 'ate', "", false, 9]));
