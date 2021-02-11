const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  const sChars = new Map();

  for (const char of s) {
    sChars.set(char, (sChars.get(char) || 0) + 1);
  }

  for (const char of t) {
    if (sChars.has(char)) {
      const newCount = sChars.get(char) - 1;

      if (newCount === 0) sChars.delete(char);
      else sChars.set(char, newCount);
    } else {
      return false;
    }
  }

  return true;
};
