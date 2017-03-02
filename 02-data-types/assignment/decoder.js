**
 * Question 1
 * Create an empty array and store it in a variable named code.
 */

var code = []; // Your code here

 **
  * Question 2
  * Add the following characters to the end of the code array:
  * 'x', 'u', 's', 'a', 'e', 'l', 'p', 'e', 'e', 'n',
  * 'i', 't', 'l', 'a', 'v', 'o', 'x', 'e', 'r',
  * 'o', 'm', 'c'
  */

code.push('x', 'u', 's', 'a', 'e', 'l', 'p', 'e', 'e', 'n',
'i', 't', 'l', 'a', 'v', 'o', 'x', 'e', 'r', 'o', 'm', 'c');// Your code here

/**
 * Question 3
 * Remove the first and last elements of the array.
 * Hint: You may need to look up a method we haven't talked about.
 */

code.shift();
code.pop(); // Your code here

**
 * Question 4
 * Reverse the array.
 *

code.reverse(); // Your code here

**
 * Question 5
 * Replace the last element in the array with an 'e'.
 * Hint: Use length
 *

code.length-1.splice('e');// Your code here

**
 * Question 6
 * Replace the 5th element and 14th element with space characters.
 * Hint: remember indexes start at 0!
 *

need some help here.  // Your code here

**
 * Question 7
 * Join the array with an empty String in between each character and log the
 * result to the console.
 *

 console.log('x' + '' + 'u' + '' + 's' + '' + 'a' + '' + 'e' + '' + 'l' +
 '' + 'p' + '' + 'e' + '' + 'e' + '' + 'n'+ '' + 'i' + '' + 't' + '' + 'l'
 + '' + 'a' + ''+ 'v' + '' + 'o' + '' + 'x' + '' + 'e' + '' + 'r' + '' +
 'o' + '' + 'm' + '' + 'c') // Your code here
