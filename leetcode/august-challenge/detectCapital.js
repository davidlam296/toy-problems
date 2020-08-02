const detectCapitalUse = (word) => {
  const chars = new Array(57).fill(0);
  let capitals = 0;

  for (const char of word) {
    chars[char.charCodeAt(0) - 'A'.charCodeAt(0)]++;
  }

  for (let i = 0; i < chars.length; i++) {
    if (i < 26) capitals += chars[i];
  }

  return capitals === word.length ||
    capitals === 0 ||
    (word.charCodeAt(0) - 'A'.charCodeAt(0) < 26 && capitals === 1)
    ? true
    : false;
};
