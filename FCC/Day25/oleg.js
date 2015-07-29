function unite(arr1, arr2, arr3) {
    var res = [];
    var sliced = Array.prototype.slice.call(arguments, 0);
    var newArr = sliced.reduce(function (q, w) {
        return q.concat(w);
    });


    for (var i = 0; i < newArr.length; i++) {
        if (res.indexOf(newArr[i]) < 0) {
            res.push(newArr[i]);
        }
    }

    return res;
}

d(unite([1, 2, 3], [5, 2, 1, 4], [2, 1]));