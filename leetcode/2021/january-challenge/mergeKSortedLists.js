const mergeKLists = (lists) => {
  const queue = [];
  const dummy = new ListNode();

  const addToQueue = (node) => {
    if (queue.length < 1) return queue.push(node);

    let start = 0;
    let end = queue.length - 1;

    while (start <= end) {
      const mid = Math.floor((start + end) / 2);

      if (node.val < queue[mid].val) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }

    queue.splice(start, 0, node);
  };

  lists.forEach((node) => {
    if (node !== null) addToQueue(node);
  });

  let curr = dummy;

  while (queue.length > 0) {
    const node = queue.pop();
    if (node.next) addToQueue(node.next);

    [curr.next, node.next, curr] = [node, null, node];
  }

  return dummy.next;
};
