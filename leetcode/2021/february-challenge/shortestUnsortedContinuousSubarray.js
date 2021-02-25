// const findUnsortedSubarray = nums => {
//   const sorted = nums.slice().sort((a, b) => a - b);
//   let start, end;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== sorted[i]) {
//       start = i;
//       break;
//     }
//   }

//   if (start !== undefined) {
//     for (let i = nums.length - 1; i >= start; i--) {
//       if (nums[i] !== sorted[i]) {
//         end = i;
//         break;
//       }
//     }

//     return end - start + 1;
//   } else {
//     return 0;
//   }
// };

const findUnsortedSubarray = (nums) => {
  if (nums.length === 1) return 0;

  let left = [nums[0]];
  let right = [];
  let stop = false;

  for (let i = 1; i < nums.length; i++) {
    if (!stop && nums[i] >= left[left.length - 1]) {
      left.push(nums[i]);
    } else {
      stop = true;

      while (left.length > 0 && nums[i] < left[left.length - 1]) {
        left.pop();
      }
    }
  }

  if (left.length === nums.length) return 0;
  else {
    stop = false;

    for (let i = nums.length - 1; i >= 0; i--) {
      if (!stop && (right.length === 0 || nums[i] <= right[right.length - 1])) {
        right.push(nums[i]);
      } else {
        stop = true;

        while (right.length > 0 && nums[i] > right[right.length - 1]) {
          // console.log('triggered');
          right.pop();
        }
      }
    }
  }

  return nums.length - left.length - right.length;
};
