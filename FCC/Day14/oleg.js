/**
* Created with Test.
* User: Apaksimen
* Date: 2015-06-12
* Time: 11:25 AM
* To change this template use Tools | Templates.
*/



function where(collection, source) {
  var arr = [];
  for (var n in collection) {
      var last = collection[n].last; // 1 arg last:values // Montague, null, Capulet
      var s = source.last;  // 2 arg last: value // Capulet
      if (last === s) {
         arr.push(collection[n]);
      }
  }
  return arr;
}

where([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' });



