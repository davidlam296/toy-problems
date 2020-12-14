const detectCycle = function (head) {
  if (!head || !head.next) return null;

  let slow = head.next;
  let fast = head.next.next;

  while (fast && fast.next) {
    if (slow === fast) break;

    slow = slow.next;
    fast = fast.next.next;
  }

  if (!fast || !fast.next) return null;

  slow = head;

  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
};
