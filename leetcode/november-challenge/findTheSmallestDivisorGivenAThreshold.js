const smallestDivisor = (nums, threshold) => {
  if (nums.length === 1) return Math.ceil(nums[0] / threshold);

  let end = -Infinity;
  let start = Math.ceil(
    nums.reduce((total, num) => {
      end = Math.max(num, end);
      return total + num;
    }, 0) / threshold
  );

  while (start < end) {
    const divisor = Math.floor((start + end) / 2);
    let total = 0;

    for (const num of nums) {
      total += Math.ceil(num / divisor);
    }

    if (total <= threshold) {
      end = divisor;
    } else {
      start = divisor + 1;
    }
  }

  return start;
};
