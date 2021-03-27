const wordSubsets = (A, B) => {
  const required = new Map();

  for (const subset of B) {
    const charMap = new Map();

    for (const char of subset) {
      charMap.set(char, (charMap.has(char) ? charMap.get(char) : 0) + 1);
    }

    for (const [char, count] of charMap.entries()) {
      if (!required.has(char) || required.get(char) < count)
        required.set(char, count);
    }
  }

  const result = [];

  A.forEach((word) => {
    const charMap = new Map();

    for (const char of word) {
      charMap.set(char, (charMap.has(char) ? charMap.get(char) : 0) + 1);
    }

    for (const [char, count] of required) {
      if (!charMap.has(char) || charMap.get(char) < count) return;
    }

    result.push(word);
  });

  return result;
};
