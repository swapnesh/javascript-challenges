/**
 * Write a function called countOccurrences() that takes in a string and a character and
 * returns the number of occurrences of that character in the string.
 */

function countOccurrences(str, character) {
  let result = 0;
  for(let i=0; i< str.length; i++) {
    if(str[i] === character) {
      result++;
    }
  }
  return result;
}

// Split Approach
// CAUTION - when there is atleast a matching character present
function countOccurrences2(str, character) {
  return str.split(character).length - 1;
}
