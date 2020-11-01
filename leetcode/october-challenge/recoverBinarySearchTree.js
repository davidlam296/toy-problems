const recoverTree = (root) => {
  let prev = null;
  let big = null;
  let small = null;

  const search = (node) => {
    if (!node) return;

    search(node.left);

    if (prev !== null && prev.val > node.val) {
      small = node;

      if (!big) big = prev;
      else return;
    }

    prev = node;
    search(node.right);
  };

  search(root);

  [big.val, small.val] = [small.val, big.val];
};
