const findTheDifference = (s, t) => {
  const map = new Map();

  for (let i = 0; i < t.length - 1; i++) {
    map.set(s[i], (map.get(s[i]) || 0) - 1);
    map.set(t[i], (map.get(t[i]) || 0) + 1);
  }

  map.set(t[t.length - 1], (map.get(t[t.length - 1]) || 0) + 1);

  for (const [key, value] of map.entries()) {
    if (value === 1) return key;
  }

  return '';
};
