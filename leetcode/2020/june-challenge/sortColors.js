const sortColors = (nums) => {
  let zeroes = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.unshift(0);
      zeroes++;
    }
    if (nums[i] === 1) {
      nums.splice(i, 1);
      nums.splice(zeroes, 0, 1);
    }
  }
};

const sortColors = (nums) => {
  let left = 0;
  let index = 0;
  let right = nums.length - 1;

  while (index <= right) {
    if (nums[index] === 0) {
      nums[index] = nums[left];
      nums[left] = 0;
      left++;
      index++;
    } else if (nums[index] === 1) {
      index++;
    } else {
      nums[index] = nums[right];
      nums[right] = 2;
      right--;
    }
  }
};
