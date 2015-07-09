function palindrome(str) {
  str = str.toLowerCase().match(/\w/ig);
  return (str.join('') === str.reverse().join(''));
}