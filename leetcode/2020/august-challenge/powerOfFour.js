const isPowerOfFour = (num) => {
  return num > 0 && (num & (num - 1)) === 0 && (num - 1) % 3 === 0
    ? true
    : false;
};
