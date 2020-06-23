const countNodes = (root) => {
  if (!root) return 0;

  let queue = [root];
  let total = 3;
  let expected = 2;

  while (queue.length > 0) {
    const newQueue = [];

    for (const node of queue) {
      if (node.left) newQueue.push(node.left);
      if (node.right) newQueue.push(node.right);
    }

    if (newQueue.length < expected) return total - expected + newQueue.length;

    expected *= 2;
    total += expected;
    queue = newQueue;
  }
};

const countNodes = (root) => {
  if (!root) return 0;

  const findDepth = () => {
    let node = root.left;
    let depth = 0;

    while (node) {
      depth++;
      node = node.left;
    }

    return depth;
  };

  const exists = (num) => {
    const route = [num];
    let node = root;

    while (num > 3) {
      num = Math.floor(num / 2);
      route.push(num);
    }

    while (route.length > 0) {
      if (route.pop() % 2) node = node.right;
      else node = node.left;
    }

    return node !== null;
  };

  const depth = findDepth();
  if (!depth) return 1;

  let right = 2 ** (depth + 1) - 1;
  let left = 2 ** depth;

  while (left < right) {
    const mid = Math.floor((right + left) / 2);
    if (exists(mid)) left = mid + 1;
    else right = mid;
  }

  return exists(left) ? left : left - 1;
};
