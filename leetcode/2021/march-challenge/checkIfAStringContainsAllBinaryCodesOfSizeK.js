const hasAllCodes = function (s, k) {
  const combos = new Set();

  for (let i = 0; i <= s.length - k; i++) {
    combos.add(s.slice(i, i + k));
  }

  return combos.size === 2 ** k;
};
