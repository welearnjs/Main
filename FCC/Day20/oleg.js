function replace(str, before, after) {
    var newAfter = "";
    var newStr = str.split(' ');
    console.log(newStr);
    for (var i = 0; i < newStr.length; i++) {
        if (newStr[i] === before) {
            if (before[0] === before[0].toUpperCase()) {
                newAfter = after[0].toUpperCase() + after.slice(1);
                newStr.splice(i, 1, newAfter);
            } else {
                newStr.splice(i, 1, after);
            }
        }
    }
    return newStr.join(' ');
}
