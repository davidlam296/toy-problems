const search = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    const mid = Math.floor((start + end) / 2);

    if (nums[mid] === target) return mid;
    if (nums[mid] > target) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }

  return nums[start] === target ? start : -1;
};
