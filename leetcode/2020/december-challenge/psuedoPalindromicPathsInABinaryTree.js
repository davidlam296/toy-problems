// const pseudoPalindromicPaths  = root => {
//   if (!root) return 0;

//   let count = 0;

//   const search = (node, odds) => {
//     if (!node.left && !node.right) {
//       if (odds.size <= 1) count++;
//       return;
//     }

//     if (node.left) {
//       const newOdds = new Set([...odds]);
//       if (newOdds.has(node.left.val)) newOdds.delete(node.left.val);
//       else newOdds.add(node.left.val);

//       search(node.left, newOdds);
//     }

//     if (node.right) {
//       const newOdds = new Set([...odds]);
//       if (newOdds.has(node.right.val)) newOdds.delete(node.right.val);
//       else newOdds.add(node.right.val);

//       search(node.right, newOdds);
//     }
//   }

//   search(root, new Set([root.val]))

//   return count;
// };

const pseudoPalindromicPaths = (root) => {
  if (!root) return 0;

  let count = 0;

  const search = (node, odds = new Set()) => {
    if (!node) return (count += odds.size <= 1 ? 1 : 0);

    if (odds.has(node.val)) odds.delete(node.val);
    else odds.add(node.val);

    if (!node.left && !node.right) search(null, odds);
    if (node.left) search(node.left, new Set([...odds]));
    if (node.right) search(node.right, new Set([...odds]));
  };

  search(root);

  return count;
};
