/**
* Created with Test.
* User: Apaksimen
* Date: 2015-06-12
* Time: 11:25 AM
* To change this template use Tools | Templates.
*/
function truncate(str, num) {
  return (str.length > num) ? str.slice(0, num-3) + "..." : str;
}


// console.log(truncate('A-tisket a-tasket A green and yellow basket', 11));
