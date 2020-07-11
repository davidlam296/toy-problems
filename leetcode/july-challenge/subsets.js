const subsets = (nums) => {
  const result = [];

  const getSubsets = (size, curr = [], index = 0) => {
    if (curr.length === size) {
      result.push(curr);
      return;
    }

    for (let i = index; i < nums.length; i++) {
      if (nums.length - index + curr.length < size) return;
      getSubsets(size, [...curr, nums[i]], i + 1);
    }
  };

  for (let i = 0; i <= nums.length; i++) {
    getSubsets(i);
  }

  return result;
};

const subsets = (nums) => {
  const result = [];

  const getSubsets = (curr = [], index = 0) => {
    result.push(curr);

    for (let i = index; i < nums.length; i++) {
      getSubsets([...curr, nums[i]], i + 1);
    }
  };

  getSubsets();

  return result;
};
