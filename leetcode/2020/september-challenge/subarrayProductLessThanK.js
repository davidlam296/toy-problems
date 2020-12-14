const numSubarrayProductLessThanK = (nums, k) => {
  if (k === 0) return 0;
  if (nums.length === 1) return nums[0] > k ? 1 : 0;

  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    let product = 1;

    for (let j = i; j < nums.length; j++) {
      product *= nums[j];

      if (product < k) {
        result++;
      } else {
        break;
      }
    }
  }

  return result;
};

const numSubarrayProductLessThanK = (nums, k) => {
  if (k === 0) return 0;
  if (nums.length === 1) return nums[0] > k ? 1 : 0;

  let result = 0;
  let product = nums[0];
  let start = 0;
  let end = 1;

  while (start < nums.length) {
    if (end === nums.length) {
      result += end - start;
      start++;
    } else if (product >= k) {
      const toAdd = end - start - 1;
      result += toAdd > 0 ? toAdd : 0;
      product /= nums[start];
      start++;
    } else {
      let newProduct = product * nums[end];

      if (newProduct >= k) {
        while (newProduct >= k && start < end) {
          result += end - start;
          newProduct /= nums[start];
          start++;
        }
      }

      product = newProduct;
      end++;
    }
  }

  return result;
};
