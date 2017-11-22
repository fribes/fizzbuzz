'use strict';

const { isMultOf3, isMultOf3and5, isMultOf5 } = require('./multipleOf');

if (require.main === module) {
  console.log(fizzbuzz(100));
}

function fizzbuzz(max) {
  const result = []
  for (let i=1; i<=max; i++) {
    result.push(answer(i))
  }
  return result;
}

function answer(i) {
  if (isMultOf3and5(i))
    return 'fizzbuzz';
  if (isMultOf3(i))
    return 'fizz' ;
  if (isMultOf5(i))
    return 'buzz';
  return `${i}`
}

module.exports = {
  fizzbuzz
}