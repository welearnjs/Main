function end(str, target) {
  return str.slice(-target.length) === target;
}

console.log(end('Bastian', 'n'));