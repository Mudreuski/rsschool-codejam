module.exports = function make(...args) {
  const arr = args.slice();

  return function solution(...items) {
    if (items[0] instanceof Function) { return arr.reduce((sum, current) => sum + current, 0); }
    items.forEach(item => arr.push(item));
    return solution;
  };
};
