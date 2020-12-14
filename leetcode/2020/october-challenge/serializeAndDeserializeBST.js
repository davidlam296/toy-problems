const serialize = (root) => {
  const result = [];

  if (root) {
    let queue = [root];

    while (queue.length > 0) {
      const resultToAdd = [];
      const newQueue = [];
      let count = 0;

      for (const node of queue) {
        if (node === null) resultToAdd.push(null);
        else {
          resultToAdd.push(node.val);

          if (node.left) {
            newQueue.push(node.left);
            count++;
          } else {
            newQueue.push(null);
          }

          if (node.right) {
            newQueue.push(node.right);
            count++;
          } else {
            newQueue.push(null);
          }
        }
      }

      result.push(...resultToAdd);

      if (count > 0) {
        queue = newQueue;
      } else {
        queue = [];
      }
    }
  }

  return JSON.stringify(result);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
const deserialize = (data) => {
  const nodes = JSON.parse(data);

  if (nodes.length < 1) return null;

  const root = new TreeNode(nodes.shift());

  let currNodes = [root];

  while (nodes.length > 0) {
    const newNodes = [];

    for (const node of currNodes) {
      const left = nodes.shift();
      const right = nodes.shift();

      if (left !== null) {
        node.left = new TreeNode(left);
        newNodes.push(node.left);
      }

      if (right !== null) {
        node.right = new TreeNode(right);
        newNodes.push(node.right);
      }
    }

    currNodes = newNodes;
  }

  return root;
};
