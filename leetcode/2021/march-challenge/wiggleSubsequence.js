const wiggleMaxLength = (nums) => {
  if (nums.length === 1) return 1;
  if (nums.length === 2) return nums[0] !== nums[1] ? 2 : 1;

  // true === positive, false === negative
  let prevDir;
  let prev = nums[0];
  let count = 1;
  let start = 1;

  while (prevDir === undefined && start < nums.length - 1) {
    if (nums[start] !== prev) {
      prevDir = nums[start] > prev ? true : false;
      prev = nums[start];
      count++;
    }

    start++;
  }

  for (let i = start; i < nums.length; i++) {
    if (nums[i] === prev) continue;

    if ((prevDir && nums[i] < prev) || (!prevDir && nums[i] > prev)) {
      prevDir = !prevDir;
      count++;
    }

    prev = nums[i];
  }

  return count;
};
