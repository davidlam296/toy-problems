const ladderLength = (beginWord, endWord, wordList) => {
  const wordSet = new Set(wordList);

  if (!wordSet.has(endWord)) return 0;
  if (!wordSet.has(beginWord)) wordList.push(beginWord);

  wordSet.add(beginWord);

  const graph = new Map();

  const matchingExceptOneChar = (s1, s2) => {
    let valid = false;

    for (let i = 0; i < s1.length; i++) {
      if (s1[i] !== s2[i]) {
        if (valid) return false;
        else valid = true;
      }
    }

    return valid;
  };

  wordList.forEach((word) => graph.set(word, new Set()));

  for (let i = 0; i < wordList.length; i++) {
    for (let j = i + 1; j < wordList.length; j++) {
      if (matchingExceptOneChar(wordList[i], wordList[j])) {
        graph.get(wordList[i]).add(wordList[j]);
        graph.get(wordList[j]).add(wordList[i]);
      }
    }
  }

  let queue = [endWord];
  let steps = 1;

  wordSet.delete(endWord);

  while (queue.length > 0) {
    const nextQueue = [];

    for (const word of queue) {
      if (word === beginWord) return steps;

      for (const match of graph.get(word)) {
        if (wordSet.has(match)) {
          nextQueue.push(match);
          wordSet.delete(match);
        }
      }
    }

    queue = nextQueue;
    steps++;
  }

  return 0;
};
