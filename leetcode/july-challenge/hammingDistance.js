const hammingDistance = (x, y) => {
  let result = 0;

  for (let i = x ^ y; i > 0; i = i >> 1) {
    if (i & 1) result++;
  }

  return result;
};

const hammingDistance = (x, y) => (x ^ y).toString(2).replace(/0/g, '').length;
