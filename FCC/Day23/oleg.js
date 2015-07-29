function fearNotLetter(str) {
    var len = str.length;
    var sCD = 0;
    var n = '';
    var result;

    var a = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    for (var i = 0; i < a.length; i++) {

        if (a[i] === str[0]) {
            for (var j = i; j < len + i; j++) {
                n += a[j];
                var idx = a[j];
                var idx2 = str[j - i];
                var aCD = idx.charCodeAt();
                sCD = idx2.charCodeAt();

                console.log(idx + ' idx');
                console.log(idx2 + ' idx2');
                console.log(sCD + ' sCD');
                console.log(aCD + ' aCD');

                if (sCD != aCD) {
                    return a[j];
                }


            }
            if (n === str) {
                return result;
            }

        }
    }

}

console.log(fearNotLetter('ac'));