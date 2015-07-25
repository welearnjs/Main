function spinalCase(str) {
  return str.toLowerCase().split(' ').join('-');
}

console.log(spinalCase('This Is Spinal Tap'));