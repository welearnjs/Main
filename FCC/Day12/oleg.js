function mutation(arr) {
    var result = true;
    arr[0] = arr[0].toLowerCase();
    arr[1] = arr[1].toLowerCase();

    var strToArr = arr[1].split('');
    for (var i = 0; i < strToArr.length; i++) {
        var c = strToArr.pop();
        var idx = arr[0].indexOf(c);
        if (idx < 0) {
            result = false;
        }
    }
    return result;
}

console.log(mutation(['Hello', 'helloy']));