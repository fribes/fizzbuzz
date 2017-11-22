'use strict';
const { isMultOf3, isMultOf5, isMultOf3and5 } = require('./multipleOf');

describe('isMultOf3', () => {

  it('should return true for 3 ', () => {
    expect(isMultOf3(3)).toBe(true);
  });

  it('should return false for 2', () => {
    expect(isMultOf3(2)).toBe(false);
  });
});

describe('isMultOf5', () => {

  it('returns true', () => {
    expect(isMultOf5(5)).toBe(true);
  });

  it('returns true', () => {
    expect(isMultOf5(2)).toBe(false);
  });
});

describe('isMultOf3and5', () => {

  it('returns true', () => {
    expect(isMultOf3and5(15)).toBe(true);
  });

  it('returns false', () => {
    expect(isMultOf3and5(2)).toBe(false);
  });
});

