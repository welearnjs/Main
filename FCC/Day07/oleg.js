function end(str, target) {
    return (str.slice(-target.length) === target) ? true : false;
}