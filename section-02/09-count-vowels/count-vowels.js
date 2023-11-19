/**
 * Write a function called countVowels that takes in a string
 * and returns the number of vowels in the string.
 */

function countVowels(str) {
  let result = 0;
  const matches = str.match(/(a|e|i|o|u)/gi);
  return matches ? matches.length : 0;
 }
