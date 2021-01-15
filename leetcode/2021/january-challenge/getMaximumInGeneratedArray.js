const getMaximumGenerated = (n) => {
  if (n === 0) return 0;

  const arr = new Array(n + 1).fill(0);

  arr[0] = 0;
  arr[1] = 1;

  const end = Math.floor(n / 2);

  for (let i = 1; i <= end; i++) {
    arr[i * 2] = arr[i];
    if (i * 2 + 1 <= n) arr[i * 2 + 1] = arr[i] + arr[i + 1];
  }

  return arr.reduce((max, num) => Math.max(num, max), -Infinity);
};
