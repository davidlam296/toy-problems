const rotateRight = (head, k) => {
  if (!head || !head.next || k < 1) return head;

  let numNodes = 1;
  let tail = head;

  while (tail.next) {
    numNodes++;
    tail = tail.next;
  }

  k = k % numNodes;
  if (k === 0) return head;

  let nodesToShift = numNodes - k;
  let newHead = head.next;
  let previous = head;

  while (nodesToShift > 1) {
    previous = newHead;
    newHead = newHead.next;
    nodesToShift--;
  }

  tail.next = head;
  previous.next = null;

  return newHead;
};
