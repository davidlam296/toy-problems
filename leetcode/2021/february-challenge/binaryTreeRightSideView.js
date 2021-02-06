const rightSideView = (root) => {
  const rightSide = [];

  if (root) {
    let queue = [root];

    while (queue.length > 0) {
      const newQueue = [];

      while (queue.length > 1) {
        const node = queue.shift();

        if (node.left) newQueue.push(node.left);
        if (node.right) newQueue.push(node.right);
      }

      const rightmostNode = queue.pop();

      rightSide.push(rightmostNode.val);
      if (rightmostNode.left) newQueue.push(rightmostNode.left);
      if (rightmostNode.right) newQueue.push(rightmostNode.right);

      queue = newQueue;
    }
  }

  return rightSide;
};
