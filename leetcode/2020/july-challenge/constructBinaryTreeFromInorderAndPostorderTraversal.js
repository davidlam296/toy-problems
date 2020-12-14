const buildTree = (inorder, postorder) => {
  const map = new Map();

  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }

  const build = (start, end) => {
    if (start > end) return null;
    const value = postorder.pop();
    const node = new TreeNode(value);

    node.right = buildTree(map.get(value) + 1, end);
    node.left = buildTree(start, map.get(value) - 1);

    return node;
  };

  return build(0, inorder.length - 1);
};
