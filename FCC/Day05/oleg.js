function titleCase(str) {

    return str.toLowerCase().split(' ').map(function (item) {
        return item[0].toUpperCase() + item.slice(1);
    }).join(' ');

}