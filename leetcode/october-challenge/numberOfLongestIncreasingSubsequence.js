const findNumberOfLIS = (nums) => {
  const dp = new Array(nums.length).fill(1);
  const counts = new Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        if (dp[j] + 1 === dp[i]) {
          counts[i] += counts[j];
        } else if (dp[j] + 1 > dp[i]) {
          dp[i] = dp[j] + 1;
          counts[i] = counts[j];
        }
      }
    }
  }

  const maxLength = Math.max(...dp);
  let result = 0;

  for (let i = 0; i < counts.length; i++) {
    if (dp[i] === maxLength) result += counts[i];
  }

  return result;
};
