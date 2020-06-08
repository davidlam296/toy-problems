const isPowerOfTwo = (n) => {
  if (n === 1) return true;

  while (n > 1) {
    if (n === 2) return true;
    n /= 2;
  }

  return false;
};

const isPowerOfTwo = (n) => {
  return n === 1 ? true : n > 1 && Number.MAX_VALUE % n === 0 ? true : false;
};

const isPowerOfTwo = (n) => {
  return n < 1 ? false : (n &= n - 1) === 0 ? true : false;
};
