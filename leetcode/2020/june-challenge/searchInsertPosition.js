const searchInsert = (nums, target) => {
  let start = 0;
  let end = nums.length;

  while (start < end) {
    const mid = Math.floor((start + end) / 2);

    if (nums[mid] === target) return mid;
    if (nums[mid] > target) end = mid;
    else start = mid + 1;
  }

  return start;
};
