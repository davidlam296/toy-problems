const longestMountain = (A) => {
  if (A.length < 3) return 0;

  let largest = 0;

  let range = [A[0]];
  let valid = false;

  for (let i = 1; i < A.length; i++) {
    if (range.length < 2) {
      if (A[i] <= range[0]) range = [A[i]];
      else range.push(A[i]);
    } else {
      if (valid) {
        if (A[i] < range[range.length - 1]) {
          range.push(A[i]);
        } else {
          largest = Math.max(largest, range.length);
          range =
            A[i] > range[range.length - 1]
              ? [range[range.length - 1], A[i]]
              : [A[i]];
          valid = false;
        }
      } else {
        if (A[i] === range[range.length - 1]) range = [];
        else if (A[i] < range[range.length - 1]) valid = true;

        range.push(A[i]);
      }
    }
  }

  if (valid) largest = Math.max(largest, range.length);

  return largest > 2 ? largest : 0;
};
