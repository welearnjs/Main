/**
* Created with Test.
* User: Apaksimen
* Date: 2015-06-12
* Time: 11:25 AM
* To change this template use Tools | Templates.
*/
function diff(arr1, arr2) {
    var newArr = [];
    arr1.forEach(function(e){
        if (arr2.indexOf(e) === -1) newArr.push(e);
    });
    arr2.forEach(function(e){
        if (arr1.indexOf(e) === -1) newArr.push(e);
    });
    return newArr;
}


//d(diff([1, 2, 3, 5], [1, 2, 3, 4, 5]));

// tbd: make it work on objects : c =[ { a:1, b:2 }, {a:2, b: 3 } ]; d = [ { a: 1, b: 2 }, {a: 5, b : 7 } ];
