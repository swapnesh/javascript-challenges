/**
 * Write a function called isPalindrome that takes in a string
 * and returns true if the string is a palindrome and false if it is not.
 */

function isPalindrome(str) {
  const sanitizedStr = str.toLowerCase().replace(/[^a-z0-9]/ig, '');
  return sanitizedStr === sanitizedStr.split('').reverse().join('');
}
