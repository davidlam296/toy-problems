const levelOrderBottom = (root) => {
  if (!root) return [];

  const result = [[root.val]];
  const queue = [root];

  let row = [];
  let currRow = queue.length;
  let nextRow = 0;

  const updateResult = () => {
    result.push(row);
    row = [];
    currRow = nextRow;
    nextRow = 0;
  };

  while (queue.length > 0) {
    if (currRow === 0) updateResult();

    const node = queue.shift();

    if (node.left) {
      row.push(node.left.val);
      queue.push(node.left);
      nextRow++;
    }

    if (node.right) {
      row.push(node.right.val);
      queue.push(node.right);
      nextRow++;
    }

    currRow--;
  }

  return result.reverse();
};
