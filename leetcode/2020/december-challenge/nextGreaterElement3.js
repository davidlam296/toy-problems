// const nextGreaterElement = n => {
//   const MAX = 2147483647n;
//   const possible = [];
//   const chars = n.toString().split('');
//   const FIRST = chars[0];
//   const searched = new Set();
//   const exists = new Set();

//   if (chars.length > 10) return -1;

//   chars.sort((a, b) => b - a);

//   const isGreaterThan = (num1, num2) => {
//     if (BigInt(num1) > MAX) return false;

//     return Number(num1) > Number(num2);
//   }

//   const getCombos = (curr, remaining) => {
//     if (remaining.length === 0) {
//       if (!exists.has(curr)) possible.push(curr);
//       exists.add(curr);
//       return;
//     }

//     for (let i = 0; i < remaining.length; i++) {
//       getCombos(curr + remaining[i], [...remaining.slice(0, i), ...remaining.slice(i + 1)])
//     }
//   }

//   for (let i = 0; i < chars.length; i++) {
//     if (chars.length === 10 && chars[i] > '2') continue;
//     if (searched.has(chars[i])) continue;
//     if (chars[i] >= FIRST)
//       getCombos(chars[i], [...chars.slice(0, i), ...chars.slice(i + 1)]);
//     else break;

//     searched.add(chars[i]);
//   }

//   for (let i = possible.length - 1; i >= 0; i--) {
//     if (isGreaterThan(possible[i], n)) return Number(possible[i]);
//   }

//   return -1;
// };

const nextGreaterElement = (n) => {
  const nums = Array.from(`${n}`, Number);
  const MAX = 2147483647;

  let max = -Infinity,
    cutoff = -1;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < max) {
      cutoff = i;
      break;
    }

    max = Math.max(max, nums[i]);
  }

  if (cutoff < 0) return -1;

  const nums2 = nums.splice(cutoff + 1).sort((a, b) => a - b);

  for (let i = 0; i < nums2.length; i++) {
    if (nums2[i] > nums[cutoff]) {
      [nums[cutoff], nums2[i]] = [nums2[i], nums[cutoff]];

      const result = Number(nums.concat(nums2).join(''));
      return result < MAX ? result : -1;
    }
  }

  return -1;
};
