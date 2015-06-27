Day 15
```javascript
function destroyer(arr) {
  // Remove all the values
  return arr;
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
```
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Day 14
```javascript
function where(collection, source) {
 var arr = [];
 // What's in a name?
 return arr;
}
where([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' });
```
Make a function that looks through a list (first argument) and returns an array of all objects that have equivalent property values (second argument).

Day 13
```javascript
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr;
}
bouncer([7, 'ate', '', false, 9]);
```
Remove all falsey values from an array.

Falsey values in javascript are false, null, 0, "", undefined, and NaN.

Day 12
```javascript
function mutation(arr) {
  return arr;
}
mutation(['hello', 'hey']);
```
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

Day 11
```javascript
function slasher(arr, howMany) {
  // it doesn't always pay to be first
  return arr;
}
slasher([1, 2, 3], 2);
```
Return the remaining elements of an array after chopping off n elements from the head.

Day 10
```javascript
function chunk(arr, size) {
  // Break it up.
  return arr;
}
chunk(['a', 'b', 'c', 'd'], 2);
```
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a multidimensional array.

Day 9
```javascript
function truncate(str, num) {
  // Clear out that junk in your trunk
  return str;
}
truncate('A-tisket a-tasket A green and yellow basket', 11);
```
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a '...' ending.

Day 8
```javascript
function repeat(str, num) {
  // repeat after me
  return str;
}
repeat('abc', 3);
```
Repeat a given string (first argument) n times (second argument). Return an empty string if n is a negative number.

Day 7
```javascript
function end(str, target) {
  // "Never give up and good luck will find you.."
  // -- Falcor
  return str;
}
end('Bastian', 'n');
```
Check if a string (first argument) ends with the given target string (second argument).

Day 6
```javascript
function largestOfFour(arr) {
  // You can do this!
  return arr;
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
```
Return Largest Numbers in Arrays.

Day 5
```javascript
function titleCase(str) {
  return str;
}
titleCase("I'm a little tea pot")
```
Return the provided string with the first letter of each word capitalized.

Day 4
```javascript
function findLongestWord(str) {
  return str.length;
}
findLongestWord('The quick brown fox jumped over the lazy dog');
```
Return the length of the longest word in the provided sentence.

Day 3
```javascript
function palindrome(str) {
  // Good luck!
  return true;
}
palindrome("eye");
```
Return true if the given string is a palindrome. Otherwise, return false.

Day 2
```javascript
function factorialize(num) {
  return num;
}
factorialize(5);
```
Return the factorial of the provided integer.

Day 1
```javascript
function reverseString(str) {
  return str;
}
reverseString('hello');
```
Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.
