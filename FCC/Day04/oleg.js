function findLongestWord(str) {
    var n = str.split(' '),
        a = [];
    for (var i = 0; i < n.length; i++) {
        a.push(n[i].length);
    }
    return Math.max.apply(null, a);
}