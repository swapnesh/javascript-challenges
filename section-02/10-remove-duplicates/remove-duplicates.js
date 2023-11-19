/**
 * Write a function called removeDuplicates that takes in an array
 * and returns a new array with duplicates removed.
 */

function removeDuplicates(arr) {
  let result = [];
  for(let i=0; i< arr.length; i++) {
    if(!result.includes(arr[i])) {
      result.push(arr[i])
    }
  }
  return result;
}
