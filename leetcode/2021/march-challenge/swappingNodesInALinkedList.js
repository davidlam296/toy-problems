const swapNodes = (head, k) => {
  const nodes = [new ListNode()];

  let curr = head;

  while (curr) {
    nodes.push(curr);
    curr = curr.next;
  }

  [nodes[k].val, nodes[nodes.length - k].val] = [
    nodes[nodes.length - k].val,
    nodes[k].val,
  ];

  return head;
};
