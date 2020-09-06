const getAllElements = (root1, root2) => {
  const result = [];

  const traverse = (root) => {
    if (!root) return;

    if (root.left) {
      traverse(root.left);
    }

    insert(root.val);

    if (root.right) {
      traverse(root.right);
    }
  };

  const insert = (val) => {
    if (result.lemngth === 0 || val > result[result.length - 1]) {
      result.push(val);
    } else {
      let start = 0;
      let end = result.length - 1;

      while (start < end) {
        const mid = Math.floor((start + end) / 2);

        if (val === result[mid]) {
          start = mid;
          end = mid;
        } else if (val > result[mid]) {
          start = mid + 1;
        } else {
          end = mid;
        }
      }

      result.splice(start, 0, val);
    }
  };

  traverse(root1);
  traverse(root2);

  return result;
};
