function boo(bool) {
  return Object.prototype.toString.call(bool) === '[object Boolean]';
}

console.log(boo(null));