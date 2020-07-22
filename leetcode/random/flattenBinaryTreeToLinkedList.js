const flatten = (root) => {
  const queue = [];

  const fillQueue = (node) => {
    if (!node) return;

    queue.push(node);

    fillQueue(node.left);
    fillQueue(node.right);
  };

  fillQueue(root);

  for (let i = 0; i < queue.length; i++) {
    const node = queue[i];
    node.left = null;
    node.right = queue[i + 1] || null;
  }
};
