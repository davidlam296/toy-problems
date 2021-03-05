const getIntersectionNode = (headA, headB) => {
  const countNodes = (head) => {
    let count = 0;

    while (head) {
      count++;
      head = head.next;
    }

    return count;
  };

  let aCount = countNodes(headA);
  let bCount = countNodes(headB);

  let a = headA;
  let b = headB;

  while (aCount !== bCount) {
    if (aCount > bCount) {
      a = a.next;
      aCount--;
    } else {
      b = b.next;
      bCount--;
    }
  }

  while (a) {
    if (a === b) return a;

    a = a.next;
    b = b.next;
  }
};
