function every(collection, pre) {
    return collection.every(function (i) {
        return (i.hasOwnProperty(pre)) ? i : false;
    });
}


//d(every([{
//    'user': 'Tinky-Winky',
//    'sex': 'male'
//}, {
//    'user': 'Dipsy',
//    'sex': 'male'
//}, {
//    'user': 'Laa-Laa',
//    'sex': 'female'
//}, {
//    'user': 'Po',
//    'sex': 'female'
//}], 'sex'));
