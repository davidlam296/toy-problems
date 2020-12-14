const subtreeWithAllDeepest = (root) => {
  const search = (depth, node) => {
    if (!node) return [depth - 1, null];

    const [leftDepth, leftNode] = search(depth + 1, node.left);
    const [rightDepth, rightNode] = search(depth + 1, node.right);
    const max = Math.max(depth, leftDepth, rightDepth);

    if (max === depth) {
      return [depth, node];
    } else if (leftDepth === rightDepth) {
      return [leftDepth, node];
    }

    return leftDepth > rightDepth
      ? [leftDepth, leftNode]
      : [rightDepth, rightNode];
  };

  return search(1, root)[1];
};
