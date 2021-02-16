const reverseKGroup = (head, k) => {
  const dummy = new ListNode();

  let curr = dummy;
  let node = head;

  while (node) {
    const group = [];
    let count = k;

    while (node && count > 0) {
      group.push(node);
      node = node.next;
      count--;
    }

    if (count > 0) break;

    for (let i = group.length - 1; i >= 0; i--) {
      curr.next = group[i];
      curr = curr.next;
    }

    curr.next = node;
  }

  return dummy.next;
};

const reverseKGroup = (head, k) => {
  const dummy = new ListNode();

  let curr = dummy;
  let node = head;

  while (node) {
    let start = node;
    let end = null;
    let count = k;

    while (node && count > 0) {
      if (count === 1) end = node;
      node = node.next;
      count--;
    }

    if (count > 0) break;

    const tempLast = start;
    let reverse = node;

    while (start !== end) {
      const temp = start.next;

      start.next = reverse;
      reverse = start;
      start = temp;
    }

    curr.next = start;
    start.next = reverse;
    curr = tempLast;
  }

  return dummy.next;
};
