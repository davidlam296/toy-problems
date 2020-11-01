const getDecimalValue = function (head) {
  const nums = [];
  let node = head;

  while (node) {
    nums.push(node.val);
    node = node.next;
  }

  return parseInt(nums.join(''), 2);
};
