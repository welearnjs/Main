function steamroller(arr) {

    return arr.toString().replace(/,+/, ',').split(',').map(function (item, index, array) {
        return (!isNaN(item)) ? parseInt(item) : item;
    });

}


console.log(steamroller([1, [2], [3, [[4]]]]));
console.log(steamroller([1, [], [3, [[4]]]]));
console.log(steamroller([[['a']], [['b']]]));