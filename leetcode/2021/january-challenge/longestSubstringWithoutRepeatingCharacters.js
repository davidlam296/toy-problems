const lengthOfLongestSubstring = (s) => {
  if (s.length <= 1) return s.length;

  const map = new Map();
  let max = 0;
  let start = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (map.has(char) && map.get(char) >= start) start = map.get(char) + 1;

    max = Math.max(max, i - start + 1);
    map.set(char, i);
  }

  return max;
};
