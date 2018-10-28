module.exports = function sumOfOther(tree) {
  const result = [];

  function recursion(obj, res, i) {
    res[i] = result[i] || [];
    res[i].push(obj.value);

    if (obj.left !== undefined) {
      recursion(obj.left, result, i + 1);
    }
    if (obj.right !== undefined) {
      recursion(obj.right, result, i + 1);
    }
  }
  recursion(tree, result, 0);

  return result;
};
