const swapPairs = (head) => {
  if (!head || !head.next) return head;

  let newHead = null,
    prev;
  let first = head,
    second = head.next;

  while (second) {
    if (!newHead) newHead = second;
    if (prev) prev.next = second;

    const next = second.next;
    second.next = first;
    first.next = next;

    prev = first;
    first = first.next;
    second = first ? first.next : null;
  }

  head = newHead;

  return head;
};
