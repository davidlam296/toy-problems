const getNodes = (node) => {
  const nodes = [];

  const queue = [node];

  while (queue.length > 0) {
    const curr = queue.shift();
    const index = curr.val - 1;

    if (!nodes[index]) {
      const edges = [];

      for (const neighbor of curr.neighbors) {
        edges.push(neighbor.val);

        const neighborIndex = neighbor.val - 1;
        if (!nodes[neighborIndex]) queue.push(neighbor);
      }

      nodes[index] = edges;
    }
  }

  return nodes;
};

const cloneGraph = (node) => {
  if (!node) return node;

  const nodes = getNodes(node);
  const copyNodes = [];

  for (let i = 0; i < nodes.length; i++) {
    const n = nodes[i];

    if (!copyNodes[i]) {
      copyNodes[i] = new Node(i + 1);
    }

    for (const index of n) {
      const neighborIndex = index - 1;
      if (!copyNodes[neighborIndex]) {
        copyNodes[neighborIndex] = new Node(index);
      }

      copyNodes[i].neighbors.push(copyNodes[neighborIndex]);
    }
  }

  return copyNodes[0];
};
