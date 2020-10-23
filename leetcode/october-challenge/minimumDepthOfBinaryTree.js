const minDepth = (root) => {
  if (!root) return 0;

  let queue = [root];
  let depth = 1;

  while (queue.length > 0) {
    const newQueue = [];

    for (const node of queue) {
      if (!node.left && !node.right) return depth;
      if (node.left) newQueue.push(node.left);
      if (node.right) newQueue.push(node.right);
    }

    depth++;
    queue = newQueue;
  }

  return depth;
};
