const reorderList = (head) => {
  if (!head) return null;
  if (!head.next) return head;

  const nodes = [];
  let node = head;

  while (node) {
    nodes.push(node);
    node = node.next;
  }

  let curr = nodes.shift();
  let back = true;

  while (nodes.length > 0) {
    let next = null;

    if (back) next = nodes.pop();
    else next = nodes.shift();

    back = !back;
    curr.next = next;
    curr = next;
  }

  curr.next = null;

  return head;
};
