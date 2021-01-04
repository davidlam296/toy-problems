const mergeTwoLists = (l1, l2) => {
  if (!l1) return l2;
  if (!l2) return l1;

  let node1 = l1.val <= l2.val ? l1 : l2;
  let node2 = node1 === l1 ? l2 : l1;

  const head = node1;
  let prev = node1;

  while (node2) {
    while (node1 && node2.val >= node1.val) {
      prev = node1;
      node1 = node1.next;
    }

    const temp = node2.next;
    node2.next = node1;
    prev.next = node2;
    node1 = node2;
    node2 = temp;
  }

  return head;
};
