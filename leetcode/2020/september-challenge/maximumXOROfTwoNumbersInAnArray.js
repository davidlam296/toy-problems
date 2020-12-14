// Needs Review!

const findMaximumXOR = (nums) => {
  let max = 0;
  let digit = 0;

  for (let i = 31; i >= 0; i--) {
    digit = digit | (1 << i);

    const set = new Set();

    for (const num of nums) {
      set.add(num & digit);
    }

    const temp = max | (1 << i);

    for (const prefix of set) {
      if (set.has(temp ^ prefix)) {
        max = temp;
        break;
      }
    }
  }
  return max;
};
