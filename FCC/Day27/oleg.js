function spinalCase(str) {
    var reg = /\s/gi,
        found = "",
        newArr = [];
    str = str.replace(/[_\W+]/gi, ' ');

    if (str.match(reg)) {
        return str.replace(/\s+/gi, '-').toLowerCase();
    } else {
        str = str + 'A';
        str = str[0].toUpperCase() + str.substr(1, str.length);
        upper:
            for (var i = 0; i < str.length; i++) {
                found = "";
                if (str[i] === str[i].toUpperCase()) { // naxodit zaglavnuju
                    inner: for (var j = i; j < str.length - 1; j++) {
                        found += str[j];
                        if (str[j + 1] === str[j + 1].toUpperCase()) {
                            newArr.push(found);
                            break inner;
                        }
                    }
                }
            }

        return newArr.join(' ').replace(/\s+/gi, '-').toLowerCase();
    }

}

//d(spinalCase('The_Andy_Griffith_Show'));
//d(spinalCase('This Is Spinal Tap'));
//d(spinalCase('Teletubbies say Eh-oh'));
//d(spinalCase('ThisIsSpinalTap'));
//d(spinalCase('thisIsSpinalTap'));