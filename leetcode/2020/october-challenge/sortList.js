const sortList = function (head) {
  if (!head || !head.next) return head;

  let lowest = head;
  let highest = head;
  let curr = head.next;

  head.next = null;

  while (curr) {
    if (curr.val < lowest.val) {
      const prevLow = lowest;

      lowest = curr;
      curr = curr.next;
      lowest.next = prevLow;
    } else if (curr.val > highest.val) {
      const prevHigh = highest;

      highest = curr;
      prevHigh.next = highest;
      curr = curr.next;
      highest.next = null;
    } else {
      let insert = lowest;
      let insertNext = lowest.next;

      while (insertNext.val < curr.val) {
        insert = insertNext;
        insertNext = insertNext.next;
      }

      insert.next = curr;
      curr = curr.next;
      insert.next.next = insertNext;
    }
  }

  return lowest;
};
