function bouncer(arr) {
    return arr.filter(function (item) {
        return (!item) ? item : item;
    });
}
console.log(bouncer([null, 0]));
console.log(bouncer([7, 'ate', "", false, 9]));
