const isValidBST = (root) => {
  const search = (node, min, max) => {
    if (!node) return true;
    if (node.val <= min || node.val >= max) return false;

    return (
      search(node.left, min, node.val) && search(node.right, node.val, max)
    );
  };

  return search(root, -Infinity, Infinity);
};
