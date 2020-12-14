const wordPattern = (pattern, str) => {
  const map = new Map();
  const usedWords = new Set();
  const order = pattern.split('');
  const words = str.split(' ');

  if (order.length !== words.length) return false;

  for (let i = 0; i < words.length; i++) {
    if (map.has(order[i])) {
      if (words[i] !== map.get(order[i])) return false;
    } else {
      if (usedWords.has(words[i])) return false;

      map.set(order[i], words[i]);
      usedWords.add(words[i]);
    }
  }

  return true;
};
