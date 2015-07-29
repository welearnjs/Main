function palindrome(str) {
    var re = /\s|[.,]/gi;
    var nStr = str.replace(re, '').toLowerCase();
    var jStr = nStr.split('').reverse().join('');
    return (jStr === nStr) ? true : false;
}


function palindromeTwo(str) {
    str = str.split('').filter(function (i) {
        return i.match(/[A-Za-z]/);
    }).join('').toLowerCase();

    if (str === str.split('').reverse().join('')) {
        return true;
    }
    return false;
}
