// const find132pattern = nums => {
//   if (nums.length < 3) return false;

//   const lows = new Map();
//   let lowest = Infinity;
//   let highest = -Infinity;

//   for (const num of nums) {
//     if (num === highest) continue;
//     else if (num < lowest) {
//       for (const [key, val] of lows.entries()) {
//         if (key === val) lows.delete(key);
//       }

//       lowest = num;
//       lows.set(num, num);
//     } else if (num > highest) {
//       highest = num;

//       for (const [key, val] of lows.entries()) {
//         lows.set(key, highest);
//       }
//     } else {
//       for (const [key, val] of lows.entries()) {
//         if (num < val && num > key) return true;
//         if (num > val) lows.set(key, num);
//       }
//     }
//   }

//   return false;
// };

const find132pattern = function (nums) {
  if (nums.length < 3) return false;

  const stack = [];
  let mid = -Infinity;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < mid) return true;

    while (stack.length && stack[stack.length - 1] < nums[i]) {
      mid = stack.pop();
    }

    stack.push(nums[i]);
  }

  return false;
};
