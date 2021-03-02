const findErrorNums = (nums) => {
  nums = nums.sort((a, b) => a - b);

  let missing = nums[0] !== 1 ? 1 : null;
  let dupe = null;

  for (let i = 1; i < nums.length; i++) {
    if (missing === null && nums[i] - nums[i - 1] > 1)
      missing = nums[i - 1] + 1;
    if (dupe === null && nums[i] === nums[i - 1]) dupe = nums[i];
    if (missing !== null && dupe !== null) break;
  }

  return [dupe, missing !== null ? missing : nums.length];
};
