const maxPower = (s) => {
  if (s.length < 1) return 0;

  let max = 1;
  let curr = 1;
  let previousChar = null;

  for (const char of s) {
    if (char === previousChar) {
      curr += 1;
      max = Math.max(max, curr);
    } else {
      previousChar = char;
      curr = 1;
    }
  }

  return max;
};
