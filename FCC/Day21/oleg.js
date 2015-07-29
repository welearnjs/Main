function translate(str) {
    var firstLetter = "",
        secondLetter = "";
    var newStr = "",
        joined = "";
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var cons = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

    for (var i = 0; i < cons.length; i++) {
        if (str[0] === cons[i]) {
            newStr = str.split('');
            firstLetter = newStr.shift();
            joined = newStr.join('');
            for (var z = 0; z < cons.length; z++) {
                if (joined[0] === cons[z]) {
                    newStr = joined.split('');
                    secondLetter = newStr.shift();
                    joined = newStr.join('');
                    return joined + firstLetter + secondLetter + "ay";
                }
            }
            return joined + firstLetter + "ay";
        } else if (str[0] === vowels[i]) {
            str = str + "way";
            return str;
        }
    }
}

console.log(translate("consonant"));
console.log(translate("dansonants"));
console.log(translate("ego"));
console.log(translate("glove"));
console.log(translate("paragraphs"));