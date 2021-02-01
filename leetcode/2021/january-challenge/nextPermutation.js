const nextPermutation = (nums) => {
  const swap = (x, y) => {
    [nums[x], nums[y]] = [nums[y], nums[x]];
  };

  const reverse = (start, end = nums.length - 1) => {
    while (start < end) {
      swap(start, end);
      start++;
      end--;
    }
  };

  for (let i = nums.length - 1; i > 0; i--) {
    if (nums[i] > nums[i - 1]) {
      let nextIndex = i + 1;

      while (nextIndex < nums.length && nums[nextIndex] > nums[i - 1]) {
        nextIndex++;
      }

      swap(nextIndex - 1, i - 1);
      reverse(i);

      return nums;
    }
  }

  return nums.sort((a, b) => a - b);
};
