const isBalanced = function (root) {
  if (!root) return true;

  const search = (node, depth = 1) => {
    if (!node) return [true, depth];

    const [leftValid, leftDepth] = search(node.left, depth + 1);
    const [rightValid, rightDepth] = search(node.right, depth + 1);

    return [
      !leftValid || !rightValid || Math.abs(leftDepth - rightDepth) > 1
        ? false
        : true,
      Math.max(leftDepth, rightDepth),
    ];
  };

  const [res, depth] = search(root);

  return res;
};
