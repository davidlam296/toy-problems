const spellchecker = (wordlist, queries) => {
  const wordSet = new Set();
  const trie = {};

  for (let i = 0; i < wordlist.length; i++) {
    const word = wordlist[i];

    if (wordSet.has(word)) continue;
    wordSet.add(word);

    let curr = trie;

    for (const char of word) {
      if (!curr[char]) curr[char] = {};

      curr = curr[char];
    }

    curr.done = word;
    curr.index = i;
  }

  const getCapsError = (word) => {
    let queue = [trie];

    for (const char of word) {
      if (queue.length < 1) return '';

      const newQueue = [];

      for (const loc of queue) {
        const otherChar =
          char.charCodeAt(0) < 97 ? char.toLowerCase() : char.toUpperCase();

        if (loc[char]) newQueue.push(loc[char]);
        if (loc[otherChar]) newQueue.push(loc[otherChar]);
      }

      queue = newQueue;
    }

    let result = '';
    let lowest = Infinity;

    for (const loc of queue) {
      if (loc.done && loc.index < lowest) {
        lowest = loc.index;
        result = loc.done;
      }
    }

    return result;
  };

  const getVowelError = (word) => {
    const vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
    const vowelSet = new Set(vowels);

    let queue = [trie];

    for (const char of word) {
      if (queue.length < 1) return '';

      const newQueue = [];

      if (vowelSet.has(char)) {
        for (const loc of queue) {
          for (const v of vowels) {
            if (loc[v]) newQueue.push(loc[v]);
          }
        }
      } else {
        const otherChar =
          char.charCodeAt(0) < 97 ? char.toLowerCase() : char.toUpperCase();

        for (const loc of queue) {
          if (loc[otherChar]) newQueue.push(loc[otherChar]);
          if (loc[char]) newQueue.push(loc[char]);
        }
      }

      queue = newQueue;
    }

    let result = '';
    let lowest = Infinity;

    for (const loc of queue) {
      if (loc.done && loc.index < lowest) {
        lowest = loc.index;
        result = loc.done;
      }
    }

    return result;
  };

  const getWord = (word) => {
    if (wordSet.has(word)) return word;

    const capsResult = getCapsError(word);

    if (capsResult === '') return getVowelError(word);
    else return capsResult;
  };

  const results = [];

  for (const queryWord of queries) {
    results.push(getWord(queryWord));
  }

  return results;
};
