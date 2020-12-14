const increasingBST = (root) => {
  const nodes = [];

  const search = (node) => {
    if (!node) return;

    if (node.right) search(node.right);

    nodes.push(node.val);

    if (node.left) search(node.left);
  };

  search(root);

  const head = new TreeNode(nodes.pop());
  let curr = head;

  while (nodes.length > 0) {
    curr.right = new TreeNode(nodes.pop());
    curr = curr.right;
  }

  return head;
};
