const findTilt = (root) => {
  if (!root || (!root.left && !root.right)) return 0;

  let result = 0;

  const search = (node) => {
    if (!node) return 0;

    const leftSum = search(node.left);
    const rightSum = search(node.right);

    result += Math.abs(leftSum - rightSum);

    return leftSum + rightSum + node.val;
  };

  search(root);

  return result;
};
