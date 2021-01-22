// const closeStrings = (word1, word2) => {
//   if (word1.length !== word2.length) return false;

//   const BASE = 'a'.charCodeAt();
//   const word1CharCounts = new Array(26).fill(0);
//   const word1CharTypes = new Set();

//   const word2CharCounts = new Array(26).fill(0);
//   const word2CharTypes = new Set();

//   for (const char of word1) {
//     word1CharCounts[char.charCodeAt(0) - BASE]++
//     word1CharTypes.add(char);
//   }

//   for (const char of word2) {
//     word2CharCounts[char.charCodeAt(0) - BASE]++
//     word2CharTypes.add(char);
//   }

//   if (word1CharTypes.size !== word2CharTypes.size) return false;

//   for (const char of word1CharTypes) {
//     if (!word2CharTypes.has(char)) return false;
//   }

//   const w1Counts = word1CharCounts.filter(c => c !== 0).sort((a, b) => a - b);
//   const w2Counts = word2CharCounts.filter(c => c !== 0).sort((a, b) => a - b);

//   for (let i = 0; i < w1Counts.length; i++) {
//     if (w1Counts[i] !== w2Counts[i]) return false;
//   }

//   return true;
// };

const closeStrings = (word1, word2) => {
  if (word1.length !== word2.length) return false;

  const BASE = 'a'.charCodeAt();
  const w1Chars = new Array(26).fill(0);
  const w2Chars = new Array(26).fill(0);

  for (const char of word1) {
    w1Chars[char.charCodeAt(0) - BASE]++;
  }

  for (const char of word2) {
    w2Chars[char.charCodeAt(0) - BASE]++;
  }

  const w1Counts = [];
  const w2Counts = [];

  for (let i = 0; i < w1Chars.length; i++) {
    if (w1Chars[i] > 0 && w2Chars[i] > 0) {
      w1Counts.push(w1Chars[i]);
      w2Counts.push(w2Chars[i]);
    } else if (w1Chars[i] > 0 || w2Chars[i] > 0) {
      return false;
    }
  }

  w1Counts.sort((a, b) => a - b);
  w2Counts.sort((a, b) => a - b);

  for (let i = 0; i < w1Counts.length; i++) {
    if (w1Counts[i] !== w2Counts[i]) return false;
  }

  return true;
};
