const widthOfBinaryTree = (root) => {
  if (!root) return 0;

  let width = 1;
  let queue = [root];

  while (queue.length > 0) {
    let newQueue = [];

    for (const node of queue) {
      if (!node) {
        newQueue.push(null, null);
      } else {
        newQueue.push(node.left);
        newQueue.push(node.right);
      }
    }

    let left = 0;
    let right = newQueue.length - 1;

    while (right >= 0 && !newQueue[right]) right--;

    if (right === -1) return width;

    while (left < right && !newQueue[left]) left++;

    width = Math.max(width, right - left + 1);

    newQueue = newQueue.slice(left, right + 1);
    queue = newQueue;
  }
};
