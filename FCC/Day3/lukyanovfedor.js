function palindrome(str) {
  return str === str.split("").reverse().join("");
}

console.log(palindrome("eye"));
