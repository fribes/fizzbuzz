'use strict';

const { fizzbuzz } = require('./fizzbuzz');

describe('fizzbuzz', () => {

  it('should return 100 element array when asked to', () => {
    expect(fizzbuzz(100)).toHaveLength(100);
  });

  it('should answer 1 for 1', () => {
    expect(fizzbuzz(15)[0]).toEqual("1");
  });

  it('should answer fizz for 3', () => {
    expect(fizzbuzz(15)[2]).toEqual("fizz");
  });

  it('element 4 should be buzz', () => {
    expect(fizzbuzz(15)[4]).toEqual("buzz");
  });

  it('element 6 should be 7', () => {
    expect(fizzbuzz(15)[6]).toEqual("7");
  });

  it('element 14 should be fizzbuzz', () => {
    expect(fizzbuzz(15)[14]).toEqual("fizzbuzz");
  });

  it('element 98 should be fizz', () => {
    expect(fizzbuzz(100)[98]).toEqual("fizz");
  });

});

