const isSubsequence = (s, t) => {
  if (s.length === 0) return true;
  if (t.length < s.length) return false;
  if (t.length === s.length) return s === t;

  let index = 0;

  for (let i = 0; i < s.length; i++) {
    const start = index;

    for (let j = start; j < t.length; j++) {
      if (t[j] === s[i]) {
        index = j + 1;
        break;
      }
    }

    if (index === start) return false;
  }

  return true;
};

const isSubsequence = (s, t) => {
  if (s.length === 0) return true;
  if (t.length < s.length) return false;
  if (t.length === s.length) return s === t;

  let charIndex = 0;

  for (const char of t) {
    if (char === s[charIndex]) {
      charIndex += 1;
      if (charIndex === s.length) return true;
    }
  }

  return false;
};
