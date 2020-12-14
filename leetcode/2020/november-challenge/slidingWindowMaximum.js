// const maxSlidingWindow = (nums, k) => {
//   const keys = new Set();
//   const freq = new Map();
//   let max = -Infinity;

//   for (let i = 0; i < k; i++) {
//     const num = nums[i];

//     freq.set(num, (freq.get(num) || 0) + 1);
//     keys.add(num);
//   }

//   max = Math.max(...keys);
//   const result = [max];

//   for (let i = k; i < nums.length; i++) {
//     const num = nums[i];
//     const prevNum = nums[i - k];

//     freq.set(num, (freq.get(num) || 0) + 1);
//     freq.set(prevNum, freq.get(prevNum) - 1);

//     keys.add(num);

//     if (freq.get(prevNum) === 0) keys.delete(prevNum);

//     if (prevNum === max && !keys.has(max)) {
//       max = Math.max(...keys);
//     }

//     max = Math.max(max, num);
//     result.push(max);
//   }

//   return result;
// };

// const maxSlidingWindow = (nums, k) => {
//   const result = [];
//   const values = [];

//   const add = (value) => {
//     if (values.length === 0) return values.push(value);
//     if (values.length === 1) return value > values[0] ? values.push(value) : values.unshift(value);

//     let start = 0;
//     let end = values.length;

//     while (start < end) {
//       const mid = Math.floor((start + end) / 2);

//       if (values[mid] === value) {
//         return values.splice(mid, 0, value);
//       } else {
//         if (values[mid] > value) {
//           if (values[mid - 1] <= value) {
//             return values.splice(mid, 0, value);
//           }
//           end = mid;
//         } else {
//           if (values[mid + 1] >= value) {
//             return values.splice(mid + 1, 0, value);
//           }
//           start = mid + 1;
//         }
//       }
//     }

//     return start === (k - 1) ? values.push(value) :
//            start === 0 ? values.unshift(value) : values.splice(start, 0, value);
//   }

//   const del = (target) => {
//     let start = 0;
//     let end = values.length;

//     while (start < end) {
//       const mid = Math.floor((start + end) / 2);

//       if (values[mid] === target) {
//         start = mid;
//         break;
//       } else {
//         if (values[mid] > target) {
//           end = mid;
//         } else {
//           start = mid + 1;
//         }
//       }
//     }

//     return start === k ? values.pop() :
//            start === 0 ? values.shift() : values.splice(start, 1);
//   }

//   for (let i = 0; i < k; i++) add(nums[i]);

//   result.push(values[k - 1]);

//   for (let i = k; i < nums.length; i++) {
//     add(nums[i]);
//     del(nums[i - k]);

//     result.push(values[k - 1]);
//   }

//   return result;
// };

const maxSlidingWindow = (nums, k) => {
  const queue = [];
  const result = [];

  for (let i = 0; i < k; i++) {
    while (queue.length > 0 && queue[queue.length - 1] < nums[i]) queue.pop();
    queue.push(nums[i]);
  }

  result.push(queue[0]);

  for (let i = k; i < nums.length; i++) {
    while (queue.length > 0 && queue[queue.length - 1] < nums[i]) queue.pop();
    queue.push(nums[i]);

    if (queue[0] === nums[i - k]) queue.shift();
    result.push(queue[0]);
  }

  return result;
};
