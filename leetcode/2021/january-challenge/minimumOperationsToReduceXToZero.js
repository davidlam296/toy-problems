// const minOperations = (nums, x) => {
//   const map = new Map();

//   const search = (curr, start = 0, end = nums.length - 1) => {
//     const index = `${curr}+${start}+${end}`;

//     if (map.has(index)) return map.get(index);
//     if (start > end || curr < 0) return - 1;
//     if (curr === 0) return 0;

//     if (start === end) {
//       const step = curr - nums[start] === 0 ? 1 : -1;
//       map.set(index, step);

//       return step;
//     } else {
//       const left = search(curr - nums[start], start + 1, end);
//       const right = search(curr - nums[end], start, end - 1);
//       let steps;

//       if (left !== -1 && right !== -1) steps = 1 + Math.min(left, right);
//       else if (left === -1 && right === -1) steps = -1;
//       else steps = left === -1 ? right + 1 : left + 1;

//       map.set(index, steps);
//       return steps;
//     }
//   }

//   return search(x);
// };

const minOperations = (nums, x) => {
  let result = Infinity;
  let left = 0;
  let right = nums.length - 1;

  while (left <= right && x - nums[left] >= 0) {
    x -= nums[left++];
  }

  result = x === 0 ? left : result;

  while (left <= right && left >= 0) {
    while (x - nums[right] >= 0) {
      x -= nums[right--];
    }

    if (x === 0) result = Math.min(result, left + nums.length - right - 1);

    x += nums[--left];
  }

  return result === Infinity ? -1 : result;
};
