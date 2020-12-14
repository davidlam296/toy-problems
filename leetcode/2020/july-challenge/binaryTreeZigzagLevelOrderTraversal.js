const zigzagLevelOrder = (root) => {
  const result = [];

  if (!root) return result;

  let leftToRight = false;
  let queue = [root];
  let values = [root.val];

  while (queue.length > 0) {
    let newQueue = [];
    let newValues = [];
    result.push(values);

    if (leftToRight) {
      while (queue.length > 0) {
        const node = queue.pop();

        if (node.left) {
          newQueue.push(node.left);
          newValues.push(node.left.val);
        }
        if (node.right) {
          newQueue.push(node.right);
          newValues.push(node.right.val);
        }
      }
    } else {
      while (queue.length > 0) {
        const node = queue.pop();

        if (node.right) {
          newQueue.push(node.right);
          newValues.push(node.right.val);
        }
        if (node.left) {
          newQueue.push(node.left);
          newValues.push(node.left.val);
        }
      }
    }

    leftToRight = !leftToRight;
    queue = newQueue;
    values = newValues;
  }

  return result;
};
