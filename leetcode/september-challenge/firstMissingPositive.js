const firstMissingPositive = (nums) => {
  nums = nums.filter((n) => n > 0);

  for (const num of nums) {
    const index = Math.abs(num);

    if (nums[index - 1] > 0) nums[index - 1] *= -1;
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) return i + 1;
  }

  return nums.length + 1;
};
