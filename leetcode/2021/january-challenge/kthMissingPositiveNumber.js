const findKthPositive = (arr, k) => {
  const missing = arr[arr.length - 1] - arr.length;

  if (missing >= k) {
    let curr = -1;
    let offset = 0;

    for (let i = 0; i < arr.length; i++) {
      const expected = i + 1 + offset;
      let num = arr[i];

      while (num-- > expected) {
        offset++;
        curr = i + offset;

        if (offset === k) return curr;
      }
    }
  }

  return arr[arr.length - 1] + k - missing;
};
