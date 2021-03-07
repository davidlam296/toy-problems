const minimumLengthEncoding = (words) => {
  const wordSet = new Set(words);

  words = [...wordSet].sort((a, b) => b.length - a.length);

  const valid = new Set();
  let result = 0;

  for (const word of words) {
    if (!valid.has(word)) {
      result += word.length + 1;

      for (let i = 0; i < word.length; i++) {
        valid.add(word.slice(i));
      }
    }
  }

  return result;
};
