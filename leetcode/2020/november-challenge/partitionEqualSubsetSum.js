// const canPartition = nums => {
//   if (nums.length < 2) return false;

//   const SUM = nums.reduce((total, n) => n + total, 0);

//   if (SUM % 2 !== 0) return false;

//   const HALF = SUM / 2;
//   const memo = new Set();
//   let found = false;

//   const search = (curr1 = 0, curr2 = 0, index = 0) => {
//     const idx1 = `${curr1}+${curr2}`;
//     const idx2 = `${curr2}+${curr1}`;

//     if (memo.has(idx1) || memo.has(idx2)) return;

//     memo.add(idx1);
//     memo.add(idx2);

//     if (found) return;
//     if (curr1 > HALF || curr2 > HALF) return;
//     if (curr1 === HALF || curr2 === HALF) {
//       found = true;
//       return;
//     }

//     for (let i = index; i < nums.length; i++) {
//       if (found) return;
//       search(curr1 + nums[index], curr2, index + 1);
//       search(curr1, curr2 + nums[index], index + 1);
//     }
//   }

//   search();

//   return found;
// };

const canPartition = (nums) => {
  if (nums.length < 2) return false;

  const SUM = nums.reduce((total, n) => n + total, 0);

  if (SUM % 2 !== 0) return false;

  const HALF = SUM / 2;
  const dp = [true];

  for (const num of nums) {
    for (let i = HALF; i >= num; i--) {
      if (dp[HALF]) return true;
      dp[i] = dp[i] || dp[i - num];
    }
  }

  return dp[HALF] || false;
};
