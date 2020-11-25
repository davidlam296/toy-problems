const smallestRepunitDivByK = (K) => {
  if (K % 2 === 0 || K % 5 === 0) return -1;

  let result = 0;
  let num = 0;

  while (++result) {
    num = (num * 10 + 1) % K;
    if (num === 0) return result;
  }
};
