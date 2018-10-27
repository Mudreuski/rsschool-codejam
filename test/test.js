const assert = require('assert');

Object.freeze(assert);
const count = require('../sumOfOther');

describe('sumOfOther', () => {
  it('1', () => {
    const result = count([2, 3, 4, 1]);
    assert.deepEqual(result, [8, 7, 6, 9]);
  });
  it('2', () => {
    const result = count([4, 0, 5, 1]);
    assert.deepEqual(result, [6, 10, 5, 9]);
  });
  it('3', () => {
    const result = count([2, 3, 4, 1]);
    assert.deepEqual(result, [8, 7, 6, 9]);
  });
  it('4', () => {
    const result = count([2, 3, 4, 1]);
    assert.deepEqual(result, [8, 7, 6, 9]);
  });
  it('5', () => {
    const result = count([2, 3, 4, 1]);
    assert.deepEqual(result, [8, 7, 6, 9]);
  });
});
