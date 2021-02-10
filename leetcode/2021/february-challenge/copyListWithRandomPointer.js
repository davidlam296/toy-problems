const copyRandomList = (head) => {
  const nodes = [];

  let node = head;
  let index = 0;

  while (node) {
    node.index = index;
    nodes.push(new Node(node.val, null, null));

    if (index > 0) nodes[index - 1].next = nodes[index];

    index++;
    node = node.next;
  }

  node = head;
  index = 0;

  while (node) {
    if (node.random) nodes[index].random = nodes[node.random.index];

    index++;
    node = node.next;
  }

  return nodes[0];
};
