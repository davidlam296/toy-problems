const removeElements = (head, val) => {
  let result = head;
  let prev = null;

  while (head) {
    if (!head) break;

    const next = head.next;

    if (head.val === val) {
      if (!prev) {
        head.next = null;
        head = next;
        result = head;
      } else {
        head.next = null;
        prev.next = next;
        head = next;
      }
    } else {
      prev = head;
      head = head.next;
    }
  }

  return result;
};
