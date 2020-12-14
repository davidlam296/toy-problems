const isSameTree = (p, q) => {
  if (p === null || q === null) return p === q;
  if (p.val !== q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

const isSameTree = (p, q) => {
  if (p === null || q === null) return p === q;

  const pQueue = [p];
  const qQueue = [q];

  while (pQueue.length > 0 || qQueue.length > 0) {
    const pNode = pQueue.shift();
    const qNode = qQueue.shift();

    if (pNode === null || qNode === null) {
      if (pNode || qNode) return false;
    } else if (pNode.val !== qNode.val) {
      return false;
    } else {
      pQueue.push(pNode.left, pNode.right);
      qQueue.push(qNode.left, qNode.right);
    }
  }

  return true;
};
