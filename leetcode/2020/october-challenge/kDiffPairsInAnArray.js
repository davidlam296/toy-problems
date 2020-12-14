const findPairs = (nums, k) => {
  if (nums.length === 1) return 0;

  let result = 0;

  if (k === 0) {
    const count = {};

    for (const num of nums) {
      count[num] = (count[num] || 0) + 1;
    }

    for (const num in count) {
      if (count[num] >= 2) result++;
    }

    return result;
  }

  nums = new Set(nums);

  for (const num of nums) {
    if (nums.has(num + k)) result++;
  }

  return result;
};
