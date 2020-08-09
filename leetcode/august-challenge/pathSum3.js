const pathSum = (root, sum) => {
  let result = 0;

  const dfs = (node, total = 0) => {
    if (!node) return;
    if (total + node.val === sum) result++;

    dfs(node.left, total + node.val);
    dfs(node.right, total + node.val);
  };

  const search = (node) => {
    if (!node) return;

    dfs(node);

    search(node.left);
    search(node.right);
  };
  search(root);

  return result;
};
