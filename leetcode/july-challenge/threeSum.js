const threeSum = (nums, target = 0) => {
  const result = [];
  nums = nums.sort((a, b) => a - b);

  const checkSums = (num, start) => {
    let end = nums.length - 1;

    while (start < end) {
      const total = num + nums[start] + nums[end];

      if (total === target) {
        result.push([num, nums[start], nums[end]]);

        while (nums[start] === nums[start + 1]) start++;
        while (nums[end] === nums[end - 1]) end--;

        start++;
        end--;
      } else if (total > target) {
        end -= 1;
      } else {
        start += 1;
      }
    }
  };

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > target) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    checkSums(nums[i], i + 1);
  }

  return result;
};
