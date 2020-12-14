const flatten = (head) => {
  if (!head) return null;

  const temps = [];
  let node = head;

  while (node) {
    if (node.child) {
      if (node.next) temps.push(node.next);

      node.next = node.child;
      node.child = null;
      node.next.prev = node;

      node = node.next;
    } else if (node.next) {
      node = node.next;
    } else if (temps.length > 0) {
      node.next = temps.pop();
      node.next.prev = node;

      node = node.next;
    } else {
      return head;
    }
  }
};
