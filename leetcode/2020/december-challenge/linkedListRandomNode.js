class Solution {
  constructor(head) {
    this.nodes = [head.val];

    let curr = head.next;

    while (curr) {
      this.nodes.push(curr.val);
      curr = curr.next;
    }
  }

  getRandom() {
    const NUM_NODES = this.nodes.length;

    return this.nodes[Math.floor(Math.random() * NUM_NODES)];
  }
}
