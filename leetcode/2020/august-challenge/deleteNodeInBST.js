const deleteNode = (root, key) => {
  if (!root) return root;

  const findNode = () => {
    if (root.val === key) return -1;

    const queue = [root];

    while (queue.length > 0) {
      const node = queue.shift();

      if (node.left) {
        if (node.left.val === key) return node;
        queue.push(node.left);
      }

      if (node.right) {
        if (node.right.val === key) return node;
        queue.push(node.right);
      }
    }
  };

  const replaceRoots = (node, direction) => {
    let rightChain;

    if (direction === 'root') {
      if (node.left) {
        rightChain = node.right;
        root = node.left;
        node = root;
      } else if (node.right) {
        root = node.right;
        return;
      } else {
        root = null;
        return;
      }
    } else if (direction === 'left') {
      if (node.left.left) {
        rightChain = node.left.right;
        node.left = node.left.left;
        node = node.left;
      } else if (node.left.right) {
        node.left = node.left.right;
        return;
      } else {
        node.left = null;
      }
    } else {
      if (node.right.left) {
        rightChain = node.right.right;
        node.right = node.right.left;
        node = node.right;
      } else if (node.right.right) {
        node.right = node.right.right;
        return;
      } else {
        node.right = null;
      }
    }

    if (rightChain) {
      while (node.right) {
        node = node.right;
      }

      node.right = rightChain;
    }
  };

  const targetNode = findNode();

  if (!targetNode) return root;

  if (targetNode === -1) {
    replaceRoots(root, 'root');
  } else if (targetNode.left && targetNode.left.val === key) {
    replaceRoots(targetNode, 'left');
  } else {
    replaceRoots(targetNode, 'right');
  }

  return root;
};
