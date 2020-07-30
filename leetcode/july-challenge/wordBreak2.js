const wordBreak = (s, wordDict) => {
  const maxLength = wordDict.reduce(
    (max, word) => (word.length > max ? word.length : max),
    0
  );
  wordDict = new Set(wordDict);

  const chars = new Set();

  for (const word of wordDict) {
    for (const char of word) {
      if (chars.add(char));
    }
  }

  for (const char of s) {
    if (!chars.has(char)) return [];
  }

  const memo = new Map();
  const result = [];

  const search = (index, words = []) => {
    if (index === s.length) {
      result.push(words.join(' '));
      return;
    }

    if (memo.has(index)) {
      for (const word of memo.get(index)) {
        search(index + word.length, [...words, word]);
      }
    } else {
      const found = [];
      const end = s.length - index;
      const LIMIT = maxLength <= end ? maxLength : end;

      for (let i = 0; i < LIMIT; i++) {
        const word = s.slice(index, index + i + 1);

        if (wordDict.has(word)) found.push(word);
      }

      memo.set(index, found);

      for (const word of found) {
        search(index + word.length, [...words, word]);
      }
    }
  };

  search(0);

  return result;
};
