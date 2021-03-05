const averageOfLevels = (root) => {
  const averages = [];
  let queue = [root];

  while (queue.length > 0) {
    const newQueue = [];

    averages.push(
      queue.reduce((sum, node) => {
        if (node.left) newQueue.push(node.left);
        if (node.right) newQueue.push(node.right);

        return sum + node.val;
      }, 0) / queue.length
    );

    queue = newQueue;
  }

  return averages;
};
