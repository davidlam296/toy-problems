const removeDuplicates = (nums) => {
  if (nums.length < 3) return;

  let prev = nums[0];
  let count = 1;
  let index = 1;

  while (index <= nums.length) {
    if (nums[index] === prev) count++;
    else {
      prev = nums[index];

      if (count > 2) {
        const toRemove = count - 2;

        nums.splice(index - count, toRemove);
        index -= toRemove;
      }

      count = 1;
    }

    index++;
  }
};
