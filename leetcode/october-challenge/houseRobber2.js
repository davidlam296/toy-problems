const rob = (nums) => {
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);

  const robbery = (start, end) => {
    let prev = 0;
    let curr = nums[start];

    for (let i = start + 1; i < end; i++) {
      const temp = curr;
      curr = Math.max(prev + nums[i], curr);
      prev = temp;
    }

    return curr;
  };

  return Math.max(robbery(0, nums.length - 1), robbery(1, nums.length));
};
