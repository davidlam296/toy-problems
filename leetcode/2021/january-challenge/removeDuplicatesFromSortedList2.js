const deleteDuplicates = (head) => {
  const newHead = new ListNode();

  let list = newHead;
  let currNode = head;

  while (currNode) {
    if (currNode.next && currNode.val === currNode.next.val) {
      const dupe = currNode.val;
      currNode = currNode.next.next;

      while (currNode && currNode.val === dupe) {
        currNode = currNode.next;
      }
    } else [list.next, list, currNode] = [currNode, currNode, currNode.next];
  }

  list.next = null;

  return newHead.next;
};
