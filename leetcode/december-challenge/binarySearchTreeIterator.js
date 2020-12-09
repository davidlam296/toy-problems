const DFS = (root) => {
  const nodes = [];

  const search = (node = root) => {
    if (!root) return;

    if (node.right) search(node.right);

    nodes.push(node.val);

    if (node.left) search(node.left);
  };

  search();

  return nodes;
};

class BSTIterator {
  constructor(root) {
    this.nodes = DFS(root);
  }

  /**
   * @return {number}
   */
  next() {
    return this.nodes.pop();
  }

  /**
   * @return {boolean}
   */
  hasNext() {
    return this.nodes.length > 0;
  }
}

// class BSTIterator {
//   constructor (root) {
//     this.nodes = [];

//     let node = root;

//     while (node) {
//       this.nodes.push(node);
//       node = node.left;
//     }
//   }

//   /**
//    * @return {number}
//    */
//   next() {
//     const node = this.nodes.pop();
//     let curr = node.right;

//     while (curr) {
//       this.nodes.push(curr);
//       curr = curr.left;
//     }

//     return node.val;
//   }

//   /**
//    * @return {boolean}
//    */
//   hasNext() {
//     return this.nodes.length > 0;
//   }
// }
