const containsNearbyAlmostDuplicate = (nums, k, t) => {
  if (t < 0 || k < 0) return false;

  for (let i = 0; i < nums.length; i++) {
    const end = i + k <= nums.length - 1 ? i + k : nums.length - 1;

    for (let j = i + 1; j <= end; j++) {
      if (Math.abs(nums[i] - nums[j]) <= t) return true;
    }
  }

  return false;
};
