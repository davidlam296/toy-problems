const longestPalindrome = (s) => {
  const map = new Map();
  let result = 0;
  let odd = false;

  for (const char of s) {
    map.set(char, (map.has(char) ? map.get(char) : 0) + 1);
  }

  map.forEach((val) => {
    if (val % 2 === 0) {
      result += val;
    } else {
      if (!odd) {
        result += val;
        odd = !odd;
      } else {
        result += val - 1;
      }
    }
  });

  return result;
};
