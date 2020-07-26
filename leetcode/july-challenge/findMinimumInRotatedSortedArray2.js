const findMin = (nums) => {
  if (nums.length < 1) return Infinity;
  if (nums.length === 1) return nums[0];

  let start = 0;
  let end = nums.length - 1;
  let alternate = Infinity;

  while (start < end) {
    if (nums[start] < nums[end]) return nums[start];

    const mid = Math.floor((start + end) / 2);

    if (nums[mid] === nums[end]) {
      alternate = Math.min(alternate, findMin(nums.slice(start, mid)));
      start = mid + 1;
    } else if (nums[mid] > nums[end]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }

  return alternate !== null ? Math.min(alternate, nums[start]) : nums[start];
};

const findMin = (nums) => {
  if (nums.length === 1) return nums[0];

  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    if (nums[start] < nums[end]) break;
    const mid = Math.floor((start + end) / 2);

    if (nums[mid] > nums[end]) {
      start = mid + 1;
    } else if (nums[mid] < nums[end]) {
      end = mid;
    } else {
      end--;
    }
  }

  return nums[start];
};
