const rob = (root) => {
  const search = (node) => {
    if (!node) return [0, 0];

    const [leftCurr, leftNext] = search(node.left);
    const [rightCurr, rightNext] = search(node.right);
    const curr = node.val + leftNext + rightNext;
    const next = Math.max(leftCurr, leftNext) + Math.max(rightCurr, rightNext);

    return [curr, next];
  };

  const [x, y] = search(root);

  return Math.max(x, y);
};
