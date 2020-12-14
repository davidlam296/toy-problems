const numPairsDivisibleBy60 = (time) => {
  const freq = time
    .map((t) => t % 60)
    .reduce((acc, t) => {
      acc[t] = (acc[t] || 0) + 1;
      return acc;
    }, {});

  const combo = (n) => (n * (n + 1)) / 2;

  let result = 0;

  if (freq[0]) result += combo(freq[0] - 1);
  if (freq[30]) result += combo(freq[30] - 1);

  for (let i = 1; i < 30; i++) {
    result += (freq[i] || 0) * (freq[60 - i] || 0);
  }

  return result;
};
