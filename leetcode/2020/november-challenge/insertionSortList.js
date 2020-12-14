const insertionSortList = (head) => {
  if (!head) return null;

  let sorted = new ListNode(head.val);
  head = head.next;

  while (head) {
    if (head.val < sorted.val) {
      sorted = new ListNode(head.val, sorted);
    } else {
      let insertLoc = sorted;

      while (insertLoc.next && insertLoc.next.val < head.val) {
        insertLoc = insertLoc.next;
      }

      const temp = insertLoc.next;
      insertLoc.next = new ListNode(head.val, temp);
    }

    head = head.next;
  }

  return sorted;
};
