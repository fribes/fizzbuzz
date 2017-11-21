'use strict';
const { isMultOf3, isMultOf5, isMultOf3and5, fizzbuzz } = require('./fizzbuzz');

describe('isMultOf3', () => {

  it('returns true', () => {
    expect(isMultOf3(3)).toBe(true);
  });

  it('returns true', () => {
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

  it('returns true', () => {
    expect(isMultOf3and5(2)).toBe(false);
  });
});


describe('fizzbuzz', () => {

  it('returns 100 element array', () => {
    expect(fizzbuzz(100)).toHaveLength(100);
  });

  it('element 0 to be 1', () => {
    expect(fizzbuzz(15)[0]).toEqual("1");
  });

  it('element 2 to be fizz', () => {
    expect(fizzbuzz(15)[2]).toEqual("fizz");
  });

  it('element 4 to be buzz', () => {
    expect(fizzbuzz(15)[4]).toEqual("buzz");
  });

  it('element 6 to be 7', () => {
    expect(fizzbuzz(15)[6]).toEqual("7");
  });

  it('element 14 to be fizzbuzz', () => {
    expect(fizzbuzz(15)[14]).toEqual("fizzbuzz");
  });

  it('element 98 to be fizz', () => {
    expect(fizzbuzz(100)[98]).toEqual("fizz");
  });

});

