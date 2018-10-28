module.exports = function sumOfOther(array) {
  const arr = array;
  const sumAll = arr.reduce((sum, current) => sum + current, 0);
  return arr.map(item => sumAll - item);
};
