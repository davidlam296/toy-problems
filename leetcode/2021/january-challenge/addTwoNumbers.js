const addTwoNumbers = (l1, l2) => {
  const dummy = new ListNode();
  
  let result = dummy;
  let node1 = l1;
  let node2 = l2;
  let one = false;
  
  while (node1 || node2) {
    const val1 = node1 ? node1.val : 0;
    const val2 = node2 ? node2.val : 0;
    let sum = val1 + val2 + (one ? 1 : 0);
    
    one = false;
    
    if (sum > 9) {
      one = true;
      sum -= 10;
    }
    
    result.next = new ListNode(sum);
    result = result.next;
    
    node1 = node1 ? node1.next : null;
    node2 = node2 ? node2.next : null;
  }
  
  if (one) result.next = new ListNode(1);
  
  return dummy.next;
};