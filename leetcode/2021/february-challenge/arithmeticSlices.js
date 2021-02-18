const numberOfArithmeticSlices = (A) => {
  const slices = {};
  let count = 0;

  let values = [A[0]];
  let diff;

  for (let i = 1; i < A.length; i++) {
    const curr = A[i];

    if (values.length > 1) {
      const prevVal = values[values.length - 1];
      const currDiff = curr - prevVal;

      if (currDiff === diff) {
        values.push(curr);
      } else {
        if (values.length >= 3) {
          slices[values.length] = (slices[values.length] || 0) + 1;
        }

        values = [prevVal, curr];
        diff = currDiff;
      }
    } else {
      diff = curr - values[0];
      values.push(curr);
    }
  }

  if (values.length >= 3)
    slices[values.length] = (slices[values.length] || 0) + 1;

  for (const [len, freq] of Object.entries(slices)) {
    const combos = ((len - 2) * (len - 1)) / 2;
    count += combos * freq;
  }

  return count;
};
