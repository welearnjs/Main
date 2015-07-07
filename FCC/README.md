Day 36
```javascript
function add() {
  return false;
}
add(2,3);
```
Create a function that sums two arguments together. If only one argument is provided, return a function that expects one additional argument and will return the sum.
For example, add(2, 3) should return 5, and add(2) should return a function that is waiting for an argument so that var sum2And = add(2); return sum2And(3); // 5
If either argument isn't a valid number, return undefined.

Day 35
```javascript
function every(collection, pre) {
  // Does everyone have one of these?
  return pre;
}
every([{'user': 'Tinky-Winky', 'sex': 'male'}, {'user': 'Dipsy', 'sex': 'male'}, {'user': 'Laa-Laa', 'sex': 'female'}, {'user': 'Po', 'sex': 'female'}], 'sex');
```
Check if the predicate (second argument) returns truthy (defined) for all elements of a collection (first argument).
For this, check to see if the property defined in the second argument is present on every element of the collection.
Remember, you can access object properties through either dot notation or [] notation.

Day 34
```javascript
function binaryAgent(str) {
  return str;
}

binaryAgent('01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111');
```
Return an English translated sentence of the passed binary string.
The binary string will be space separated.

Day 33
```javascript
function steamroller(arr) {
  // I'm a steamroller, baby
  return arr;
}

steamroller([1, [2], [3, [[4]]]]);
```
Flatten a nested array. You must account for varying levels of nesting.

Day 32
```javascript
function drop(arr, func) {
  // Drop them elements.
  return arr;
}
drop([1, 2, 3], function(n) {return n < 3; });
```
Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.

Day 31
```javascript
function find(arr, func) {
  var num = 0;
  return num;
}
find([1, 2, 3, 4], function(num){ return num % 2 === 0; });
```
Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).

Day 30
```javascript
function smallestCommons(arr) {
  return arr;
}
smallestCommons([1,5]);
```
Find the smallest number that is evenly divisible by all numbers in the provided range.The range will be an array of two numbers that will not necessarily be in numerical order.

Day 29
```javascript
function sumPrimes(num) {
  return num;
}
sumPrimes(10);
```
Sum all the prime numbers up to and including the provided number.
A prime number is defined as having only two divisors, 1 and itself. For example, 2 is a prime number because it's only divisible by 1 and 2. 1 isn't a prime number, because it's only divisible by itself.

Day 28
```javascript
function sumFibs(num) {
  return num;
}
sumFibs(4);
```
Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a Fibonacci number.
The first few numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8, and each subsequent number is the sum of the previous two numbers.
As an example, passing 4 to the function should return 5 because all the odd Fibonacci numbers under 4 are 1, 1, and 3.

Day 27
```javascript
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  return str;
}

spinalCase('This Is Spinal Tap');
```
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

Day 26
```javascript
function convert(str) {
  // &colon;&rpar;
  return str;
}

convert('Dolce & Gabbana');

```
Convert the characters "&", "<", ">", '"' (double quote), and "'" (apostrophe), in a string to their corresponding HTML entities.

Day 25
```javascript
function unite(arr1, arr2, arr3) {
  return arr1;
}

unite([1, 2, 3], [5, 2, 1, 4], [2, 1]);
```
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Day 24
```javascript
function boo(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  return bool;
}

boo(null);
```
Check if a value is classified as a boolean primitive. Return true or false.
Boolean primitives are true and false.

Day 23
```javascript
function fearNotLetter(str) {
  return str;
}

fearNotLetter('abce');
```
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.

Day 22
```javascript
function pair(str) {
 return str;
}

pair("GCG");
```
The DNA strand is missing the pairing element. Match each character with the missing element and return the results as a 2d array.
Base pairs are a pair of AT and CG. Match the missing element to the provided character.
Return the provided character as the first element in each array.


Day 21
```javascript
function translate(str) {
 return str;
}

translate("consonant");

```
Translate the provided string to pig latin.
Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".If a word begins with a vowel you just add "way" to the end.

Day 20
```javascript
function replace(str, before, after) {
 return str;
}

replace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
```
Perform a search and replace on the sentence using the arguments provided and return the new sentence.
First argument is the sentence to perform the search and replace on.
Second argument is the word that you will be replacing (before).
Third argument is what you will be replacing the second argument with (after).
NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word 'Book' with the word 'dog', it should be replaced as 'Dog'

Day 19
```javascript
function convert(num) {
 return num;
}
convert(36);
```
Convert the given number into a roman numeral.
All roman numerals answers should be provided in upper-case.

Day 18
```javascript
function diff(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  return newArr;
}
diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
```
Compare two arrays and return a new array with any items not found in both of the original arrays.

Day 17
```javascript
function sumAll(arr) {
  return(1);
}
sumAll([1, 4]);
```
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
The lowest number will not always come first.

Day 16
```javascript
function where(arr, num) {
  // Find my place in this sorted array.
  return num;
}
where([40, 60], 50);
```
Return the lowest index at which a value (second argument) should be inserted into a sorted array (first argument). For example, where([1,2,3,4], 1.5) should return 1 because it is greater than 1 (0th index), but less than 2 (1st index).

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
