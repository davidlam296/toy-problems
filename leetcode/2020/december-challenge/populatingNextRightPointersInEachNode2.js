const connect = (root) => {
  if (!root) return null;

  let queue = [root];

  while (queue.length > 0) {
    for (let i = 0; i < queue.length - 1; i++) {
      queue[i].next = queue[i + 1];
    }

    const newQueue = [];

    for (const node of queue) {
      if (node.left) newQueue.push(node.left);
      if (node.right) newQueue.push(node.right);
    }

    queue = newQueue;
  }

  return root;
};
