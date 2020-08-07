const verticalTraversal = (root) => {
  const groups = {};
  const queue = [{ x: 0, y: 0, node: root }];

  while (queue.length > 0) {
    const item = queue.shift();

    if (groups[item.x]) groups[item.x].push(item);
    else groups[item.x] = [item];

    if (item.node.left)
      queue.push({ x: item.x - 1, y: item.y - 1, node: item.node.left });
    if (item.node.right)
      queue.push({ x: item.x + 1, y: item.y - 1, node: item.node.right });
  }

  return Object.entries(groups)
    .sort((a, b) => a[0] - b[0])
    .map((group) =>
      group[1]
        .sort((a, b) => {
          if (a.y - b.y === 0) {
            return a.node.val - b.node.val;
          } else {
            return b.y - a.y;
          }
        })
        .map((item) => item.node.val)
    );
};
