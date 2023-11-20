/**
 * Write a function called fizzBuzzArray that takes in a number and returns an array.
 * The array should contain all the numbers from 1 to the number passed in.
 * However, if the number is divisible by 3, you should replace the number with "Fizz".
 * If the number is divisible by 5, you should replace the number with "Buzz".
 * If the number is divisible by both 3 and 5, you should replace the number with "FizzBuzz".
 */

function fizzBuzzArray(num) {
  let result = [];
  for(let i=1; i<= num; i++) {
    if(i%3 === 0 && i%5 === 0) {
      result.push('FizzBuzz');
    }

    if(i%3 === 0) {
      result.push('Fizz');
    }

    if(i%5 === 0) {
      result.push('Buzz');
    }
  }
  return result;
}
