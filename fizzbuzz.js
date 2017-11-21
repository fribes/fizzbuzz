'use strict';

if (require.main === module) {
  console.log(fizzbuzz(100));
}

function fizzbuzz(max) {
  const result = []
  for (let i=1; i<=max; i++) {
    if (isMultOf3and5(i))
      result.push('fizzbuzz');
    else if (isMultOf3(i))
      result.push('fizz');
    else if (isMultOf5(i))
      result.push('buzz');
    else
      result.push(`${i}`)
  }
  return result;
}

function isMultOf3 (number) {
  return number%3 === 0
}

function isMultOf5 (number) {
  return number%5 === 0
}

function isMultOf3and5 (number) {
  return number%15 === 0
}

module.exports = {
  isMultOf3,
  isMultOf5,
  isMultOf3and5,
  fizzbuzz
}