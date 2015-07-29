function diff(arr1, arr2) {
    var newArr = [];
    arr1.forEach(function (e) {
        if (arr2.indexOf(e) === -1) newArr.push(e);
    });
    arr2.forEach(function (e) {
        if (arr1.indexOf(e) === -1) newArr.push(e);
    });
    return newArr;
}


console.log(diff([1, 2, 3, 5], [1, 2, 3, 4, 5]));