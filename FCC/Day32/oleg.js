function drop(arr, func) {
    var arr2 = [];
    for (var i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            arr2.push(arr[i]);
        }
    }
    return arr2;

}

console.log(drop([1, 2, 3], function (n) {
    return n < 3;
}));