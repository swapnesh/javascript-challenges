/**
 * Write a function called findMaxNumber that takes in an array of numbers
 * and returns the largest number in the array.
 */

// There is already a predefined Math.max function in JS

function findMaxNumber(arr) {
  let largest = arr[0];
  for(let i=1; i< arr.length; i++) {
    if(arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}
