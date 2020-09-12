const maxProduct = (nums) => {
  if (nums.length < 1) return 0;
  if (nums.length === 1) return nums[0];

  let max = nums[0];
  let currMin = nums[0];
  let currMax = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const minRes = currMin * nums[i];
    const maxRes = currMax * nums[i];

    currMin = Math.min(nums[i], minRes, maxRes);
    currMax = Math.max(nums[i], minRes, maxRes);
    max = Math.max(max, currMax);
  }

  return max;
};
