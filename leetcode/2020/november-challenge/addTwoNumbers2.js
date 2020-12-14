const addTwoNumbers = (l1, l2) => {
  const nums1 = [];
  const nums2 = [];

  while (l1) {
    nums1.push(l1.val);
    l1 = l1.next;
  }

  while (l2) {
    nums2.push(l2.val);
    l2 = l2.next;
  }

  const final = [];
  const end = Math.max(nums1.length, nums2.length);
  let one = false;

  for (let i = 0; i < end; i++) {
    const n1Index = nums1.length - 1 - i;
    const n2Index = nums2.length - 1 - i;
    const sum =
      (n1Index >= 0 ? nums1[n1Index] : 0) +
      (n2Index >= 0 ? nums2[n2Index] : 0) +
      (one ? 1 : 0);

    if (sum > 9) {
      one = true;
      final.unshift(Number(sum.toString().charAt(1)));
    } else {
      one = false;
      final.unshift(sum);
    }
  }

  if (one) final.unshift(1);

  const head = new ListNode(final[0]);
  let curr = head;

  for (let i = 1; i < final.length; i++) {
    curr.next = new ListNode(final[i]);
    curr = curr.next;
  }

  return head;
};
