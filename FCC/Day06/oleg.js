function largestOfFour(arr) {
    return arr.map(function (item, index, array) {
        return Math.max.apply(null, item);
    });
}
