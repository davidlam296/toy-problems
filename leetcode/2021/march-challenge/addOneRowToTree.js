const addOneRow = (root, v, d) => {
  if (d === 1) return new TreeNode(v, root);

  const replace = (node, depth, direction) => {
    if (depth === d) {
      const replacement = new TreeNode(v);

      if (node === null) return replacement;
      else if (direction === 'L') replacement.left = node;
      else if (direction === 'R') replacement.right = node;

      return replacement;
    }

    if (node === null) return null;

    node.left = replace(node.left, depth + 1, 'L');
    node.right = replace(node.right, depth + 1, 'R');

    return node;
  };

  replace(root, 1);

  return root;
};
