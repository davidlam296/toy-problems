const sumRootToLeaf = (root) => {
  let result = 0;

  const search = (node, curr = []) => {
    if (!node.right && !node.left) {
      result += parseInt(curr.join(''), 2);
      return;
    }

    if (node.right) search(node.right, [...curr, node.right.val]);
    if (node.left) search(node.left, [...curr, node.left.val]);
  };

  search(root, [root.val]);

  return result;
};
