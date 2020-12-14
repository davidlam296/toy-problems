const repeatedSubstringPattern = (s) => {
  const mid = Math.floor(s.length / 2);
  let curr, multiplier;

  for (let i = 1; i <= mid; i++) {
    curr = s.slice(0, i);
    multiplier = Math.floor(s.length / curr.length);

    if (curr.repeat(multiplier) === s) return true;
  }

  return false;
};
