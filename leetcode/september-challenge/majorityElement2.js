const majorityElement = (nums) => {
  const result = [];
  let A = null;
  let B = null;
  let countA = 0;
  let countB = 0;

  for (const num of nums) {
    if (num === A) countA++;
    else if (num === B) countB++;
    else {
      if (A === null || B === null) {
        if (A === null) {
          A = num;
          countA++;
        } else {
          B = num;
          countB++;
        }
      } else {
        if (A !== null) {
          countA--;

          if (countA === 0) A = null;
        }

        if (B !== null) {
          countB--;

          if (countB <= 0) B = null;
        }
      }
    }
  }

  countA = 0;
  countB = 0;

  for (const num of nums) {
    if (num === A) countA++;
    if (num === B) countB++;
  }

  if (countA > nums.length / 3) result.push(A);
  if (countB > nums.length / 3) result.push(B);

  return result;
};
