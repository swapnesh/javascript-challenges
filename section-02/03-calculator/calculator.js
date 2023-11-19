/**
 * Write a function called calculator that takes in 2 numbers and an operator
 * and returns the result of the calculation.
 */

function calculator(num1, num2, operator) {
  let result;
  switch(operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      throw new Error('Invalid operator');
  }
  return result;
}
