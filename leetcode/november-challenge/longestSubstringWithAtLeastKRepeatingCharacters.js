const longestSubstring = (s, k) => {
  const MAX = new Set(s).size;
  let result = 0;

  for (let uniq = 1; uniq <= MAX; uniq++) {
    const freq = new Map();
    let start = 0;

    for (let i = 0; i < s.length; i++) {
      const char = s[i];

      freq.set(char, (freq.get(char) || 0) + 1);

      if (freq.size > uniq) {
        while (freq.size > uniq) {
          const prevChar = s[start];
          freq.set(prevChar, freq.get(prevChar) - 1);

          if (freq.get(prevChar) === 0) freq.delete(prevChar);
          start++;
        }
      } else {
        let valid = true;
        freq.forEach((count) => (valid = count < k ? false : valid));

        if (valid) result = Math.max(result, i - start + 1);
      }
    }
  }

  return result;
};
