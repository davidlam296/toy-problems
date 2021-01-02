const getTargetCopy = (original, cloned, target) => {
  let found = false;

  const getDirections = (node, path = 'S') => {
    if (!node) return;
    if (found) return;
    if (node === target) {
      found = true;
      return path;
    }

    const leftPath = getDirections(node.left, path + 'L');
    const rightPath = getDirections(node.right, path + 'R');

    return leftPath ? leftPath : rightPath ? rightPath : null;
  };

  const path = getDirections(original);
  let targetNode = cloned;

  for (const char of path) {
    if (char === 'L') targetNode = targetNode.left;
    if (char === 'R') targetNode = targetNode.right;
  }

  return targetNode;
};
