const assert = require('assert');

Object.freeze(assert);
const sumOfOther = require('../src/sumOfOther');
const make = require('../src/make');
const recursion = require('../src/recursion');

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

describe('recursion', () => {
  it('1', () => {
    const tree = { value: 100, left: { value: 90, left: { value: 70 }, right: { value: 99 } }, right: { value: 120, left: { value: 110 }, right: { value: 130 } } };
    const result = recursion(tree);
    assert.deepEqual(result, [[100], [90, 120], [70, 99, 110, 130]]);
  });

  it('2', () => {
    const tree = { value: 110, left: { value: 100, left: { value: 80 }, right: { value: 109 } }, right: { value: 130, left: { value: 120 }, right: { value: 140 } } };
    const result = recursion(tree);
    assert.deepEqual(result, [[110], [100, 130], [80, 109, 120, 140]]);
  });

  it('3', () => {
    const tree = { value: 100, left: { value: 90, left: { value: 70 } }, right: { value: 120, right: { value: 130 } } };
    const result = recursion(tree);
    assert.deepEqual(result, [[100], [90, 120], [70, 130]]);
  });

  it('4', () => {
    const tree = { value: 100, left: { value: 90 }, right: { value: 120 } };
    const result = recursion(tree);
    assert.deepEqual(result, [[100], [90, 120]]);
  });

  it('5', () => {
    const tree = { value: 100, left: { value: 90, left: { value: 70, left: { value: 65 } }, right: { value: 99 } }, right: { value: 120, left: { value: 110 }, right: { value: 130, right: { value: 200 } } } };
    const result = recursion(tree);
    assert.deepEqual(result, [[100], [90, 120], [70, 99, 110, 130], [65, 200]]);
  });
});
