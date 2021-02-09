const convertBST = (root) => {
  if (!root) return root;

  const update = (node, carryOver = 0) => {
    if (!node) return 0;

    const rightSum = update(node.right, carryOver);

    node.val += rightSum + carryOver;

    return node.val + update(node.left, node.val) - carryOver;
  };

  update(root);

  return root;
};
