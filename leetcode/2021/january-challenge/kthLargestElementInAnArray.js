const findKthLargest = (nums, k) => nums.sort((a, b) => a - b)[nums.length - k];
