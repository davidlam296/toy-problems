const sumOfLeftLeaves = (root) => {
  if (!root || (!root.left && !root.right)) return 0;

  let sum = 0;
  const queue = [root];

  while (queue.length) {
    const node = queue.shift();

    if (node.left) {
      if (!node.left.left && !node.left.right) {
        sum += node.left.val;
      } else {
        queue.push(node.left);
      }
    }

    if (node.right) {
      queue.push(node.right);
    }
  }

  return sum;
};
