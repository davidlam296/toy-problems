const rangeSumBST = (root, low, high) => {
  let sum = 0;
  const queue = [root];

  while (queue.length > 0) {
    const node = queue.shift();

    if (node.val >= low && node.val <= high) {
      sum += node.val;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    } else if (node.val < low && node.right) {
      queue.push(node.right);
    } else if (node.val > high && node.left) {
      queue.push(node.left);
    }
  }

  return sum;
};
