const removePalindromeSub = (s) =>
  s.length === 0 ? 0 : s.split('').reverse().join('') === s ? 1 : 2;
