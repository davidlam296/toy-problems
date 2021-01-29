const verticalTraversal = function (root) {
  const left = [];
  const right = [];

  let queue = [[0, root]];

  while (queue.length > 0) {
    const temp = {};
    const newQueue = [];

    for (const [x, node] of queue) {
      if (temp[x]) temp[x].push(node.val);
      else temp[x] = [node.val];

      if (node.left) newQueue.push([x - 1, node.left]);
      if (node.right) newQueue.push([x + 1, node.right]);
    }

    for (const x in temp) {
      const idx = x >= 0 ? x : Math.abs(x) - 1;
      const side = x >= 0 ? right : left;

      temp[x].sort((a, b) => a - b);
      side[idx] = side[idx] ? [...side[idx], ...temp[x]] : temp[x];
    }

    queue = newQueue;
  }

  return [...left.reverse(), ...right];
};
