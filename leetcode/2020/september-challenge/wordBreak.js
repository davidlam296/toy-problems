const wordBreak = (s, wordDict) => {
  if (wordDict.length === 0) return false;

  wordDict = new Set([...wordDict]);

  let longest = 0;

  for (const word of wordDict) {
    longest = Math.max(longest, word.length);
  }

  const queue = [0];
  const explored = new Set();

  while (queue.length > 0) {
    if (explored.has(s.length)) return true;

    const start = queue.shift();
    const end = start + longest;
    let word = '';

    for (let i = start; i < (end < s.length ? end : s.length); i++) {
      word += s[i];

      if (wordDict.has(word) && !explored.has(i + 1)) {
        explored.add(i + 1);
        queue.push(i + 1);
      }
    }
  }

  return false;
};
