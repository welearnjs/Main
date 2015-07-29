function find(arr, func) {
    var arg2;

    arg2 = arr.some(function (i) {
        return i;
    });


    if (arg2 === true) {
        for (var i = 0; i < arr.length; i++) {
            arg2 = func(arr[i]);
            if (arg2 === true) {
                return arr[i];
            }
        }
    }
    return undefined;
}

console.log(find([1, 2], function (num) {
    return num % 2 === 0;
}));