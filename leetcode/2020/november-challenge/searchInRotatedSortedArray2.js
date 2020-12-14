const search = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    const mid = Math.floor((start + end) / 2);

    if (nums[mid] === target) return true;

    if (nums[mid] === nums[end]) end--;
    else if (nums[mid] < nums[end]) {
      if (nums[mid] < target && nums[end] >= target) start = mid + 1;
      else end = mid;
    } else {
      if (nums[mid] < target || nums[start] > target) start = mid + 1;
      else end = mid;
    }
  }

  return nums[start] === target;
};
