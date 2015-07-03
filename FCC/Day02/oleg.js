/**
* Created with Test.
* User: Apaksimen
* Date: 2015-06-12
* Time: 11:25 AM
* To change this template use Tools | Templates.
*/
function factorialize(num) {
  if (num === 1) {
    return 1;
  } else {
    return num * factorialize(num-1); 
  }
}

console.log(factorialize(5));