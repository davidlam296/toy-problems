const findDuplicate = (nums) => {
  let p = nums[0];
  let q = nums[nums[0]];

  while (p !== q) {
    p = nums[p];
    q = nums[nums[q]];
  }

  p = 0;

  while (p !== q) {
    p = nums[p];
    q = nums[q];
  }

  return p;
};
