'use strict';

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
  isMultOf3and5
}