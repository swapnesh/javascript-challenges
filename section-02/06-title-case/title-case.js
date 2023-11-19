/**
 * Write a function called titleCase that takes in a string and
 * returns the string with the first letter of each word capitalized.
 */

function titleCase(str) {
  const splitStrArr = str.split(' ');

  let outputArr = [];

  for(let i=0; i<splitStrArr.length; i++) {
    outputArr.push(splitStrArr[i][0].toUpperCase() + splitStrArr[i].substring(1).toLowerCase());
  }

  return outputArr.join(' ');
}

// REGEX USE CASE
function titleCase1(str) {
  return str.toLowerCase().replace(/\b\w/g, match => match.toUpperCase())
}
