// BFS
const invertTree = (root) => {
  if (!root) return null;

  let queue = [root];

  while (queue.length > 0) {
    const newQueue = [];

    for (const node of queue) {
      const left = node.left;
      const right = node.right;

      node.left = right;
      node.right = left;

      if (node.left) newQueue.push(right);
      if (node.right) newQueue.push(left);
    }

    queue = newQueue;
  }

  return root;
};

// DFS
const invertTree = (node) => {
  if (!node) return node;

  const left = node.left;
  const right = node.right;

  node.left = right;
  node.right = left;

  if (right) invertTree(right);
  if (left) invertTree(left);

  return node;
};
