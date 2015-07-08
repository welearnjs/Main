function reverseString(str) {
  return (!(str.length - 1) && str) || str[str.length - 1] + reverseString(str.slice(0, str.length - 1));
}
console.log(reverseString('helloasdfasdf'));