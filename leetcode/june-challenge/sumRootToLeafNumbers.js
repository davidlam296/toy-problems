const sumNumbers = (root) => {
  if (!root) return 0;

  const nums = [];

  const getNums = (n, node) => {
    if (!node.left && !node.right) {
      nums.push(Number(n + node.val));
    }

    if (node.left) getNums(n + node.val, node.left);
    if (node.right) getNums(n + node.val, node.right);
  };

  getNums('', root);

  return nums.reduce((total, num) => total + num, 0);
};

const sumNumbers = (root) => {
  if (!root) return 0;

  let total = 0;

  const getNums = (n, node) => {
    if (!node.left && !node.right) total += Number(n + node.val);
    if (node.left) getNums(n + node.val, node.left);
    if (node.right) getNums(n + node.val, node.right);
  };

  getNums('', root);

  return total;
};
