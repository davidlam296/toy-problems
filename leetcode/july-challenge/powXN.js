const myPow = (x, n) => {
  if (n === 0) return 1;
  if (n === 1) return x;

  const power = Math.abs(n);
  const result =
    power % 2 === 0
      ? myPow(x * x, power / 2)
      : myPow(x * x, (power - 1) / 2) * x;

  return n < 0 ? 1 / result : result;
};
