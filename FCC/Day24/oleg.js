function boo(bool) {
    return (Object.prototype.toString.call(bool) === '[object Boolean]') ? true : false;

}

d(boo(null));