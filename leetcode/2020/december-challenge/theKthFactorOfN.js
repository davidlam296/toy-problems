const kthFactor = (n, k) => {
  const factors = [1, n];
  const end = Math.sqrt(n);

  for (let i = 2; i < end; i++) {
    if (n % i === 0) {
      factors.splice(factors.length / 2, 0, n / i);
      factors.splice(factors.length / 2, 0, i);
    }
  }

  if (n % end === 0) factors.splice(factors.length / 2, 0, end);

  return k > factors.length ? -1 : factors[k - 1];
};
