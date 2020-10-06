const insertIntoBST = (root, val) => {
  if (!root) return new TreeNode(val);

  if (val > root.val) root.right = insertIntoBST(root.right, val);
  else root.left = insertIntoBST(root.left, val);

  return root;
};
