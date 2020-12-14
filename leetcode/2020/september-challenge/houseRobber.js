const rob = (nums) => {
  const dp = [0, nums[0]];

  for (let i = 1; i < nums.length; i++) {
    dp[i + 1] = Math.max(nums[i] + dp[i - 1], dp[i]);
  }

  return dp[nums.length];
};
