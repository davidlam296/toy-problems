// O(1) space

// const rotate = (nums, k) => {
//   if (nums.length > 1) {
//     k = k % nums.length;

//     while (k > 0) {
//       nums.unshift(nums.pop());
//       k--;
//     }
//   }
// };

// O(nums % k) space, but more effective with larger array

const rotate = (nums, k) => {
  if (nums.length > 1) {
    const stack = [];
    k = k % nums.length;

    while (k > 0) {
      stack.push(nums.pop());
      k--;
    }

    nums.unshift(...stack.reverse());
  }
};
