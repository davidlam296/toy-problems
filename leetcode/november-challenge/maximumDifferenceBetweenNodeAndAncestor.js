const maxAncestorDiff = (root) => {
  let result = 0;

  const search = (node, max, min) => {
    if (!node) return;

    max = Math.max(max, node.val);
    min = Math.min(min, node.val);

    result = Math.max(result, Math.abs(max - min));

    search(node.left, max, min);
    search(node.right, max, min);
  };

  search(root, root.val, root.val);

  return result;
};
