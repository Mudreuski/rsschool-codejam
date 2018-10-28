const assert = require('assert');

Object.freeze(assert);
const sumOfOther = require('../sumOfOther');
const make = require('../make');

describe('sumOfOther', () => {
  it('1', () => {
    const result = sumOfOther([2, 3, 4, 1]);
    assert.deepEqual(result, [8, 7, 6, 9]);
  });

  it('2', () => {
    const result = sumOfOther([4, 0, 5, 1]);
    assert.deepEqual(result, [6, 10, 5, 9]);
  });

  it('3', () => {
    const result = sumOfOther([2, 3, 4, 1]);
    assert.deepEqual(result, [8, 7, 6, 9]);
  });

  it('4', () => {
    const result = sumOfOther([2, 3, 4, 1]);
    assert.deepEqual(result, [8, 7, 6, 9]);
  });

  it('5', () => {
    const result = sumOfOther([2, 3, 4, 1]);
    assert.deepEqual(result, [8, 7, 6, 9]);
  });
});

describe('make', () => {
  it('1', () => {
    const sum = (a, b) => a + b;
    const result = make(15)(34, 21, 666)(41)(sum);
    assert.equal(result, 777);
  });

  it('2', () => {
    const sum = (a, b) => a + b;
    const result = make(15)(34, 21, 666)(41)(41)(34, 21, 666)(15)(sum);
    assert.equal(result, 1554);
  });

  it('3', () => {
    const sum = (a, b) => a + b;
    const result = make(11)(100, 1000, 10000)(100000)(sum);
    assert.equal(result, 111111);
  });

  it('4', () => {
    const sum = (a, b) => a + b;
    const result = make(57)(89, 660)(sum);
    assert.equal(result, 806);
  });

  it('5', () => {
    const sum = (a, b) => a + b;
    const result = make(15)(34, 21, 666)(34, 21, 666, 123456)(41)(sum);
    assert.equal(result, 124954);
  });
});
