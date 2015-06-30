/**
* Created with Test.
* User: Apaksimen
* Date: 2015-06-12
* Time: 11:25 AM
* To change this template use Tools | Templates.
*/
function titleCase(str) {
   
  return str.toLowerCase().split(' ').map(function(item){
    return item[0].toUpperCase() + item.slice(1);
  }).join(' ');
   
}

// console.log(titleCase("I'm a lITtle tea pot"));
