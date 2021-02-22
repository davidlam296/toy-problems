// const findLongestWord = (s, d) => {
//   const dict = d.reduce((di, word) => {
//     if (di[word.length]) {
//       di[word.length].push(word);
//     } else {
//       di[word.length] = [word];
//     }
//     return di;
//   }, {});

//   const words = Object.entries(dict)
//     .sort(([a], [b]) => a - b)
//     .map(([len, words]) => words.sort());

//   const chars = {};

//   for (let i = 0; i < s.length; i++) {
//     if (chars[s[i]]) {
//       chars[s[i]].push(i);
//     } else {
//       chars[s[i]] = [i];
//     }
//   }

//   const getNextIndex = (locs, target) => {
//     let start = 0;
//     let end = locs.length;

//     while (start < end) {
//       const mid = Math.floor((start + end) / 2);
//       const index = locs[mid];

//       if (index <= target) {
//         start = mid + 1;
//       } else {
//         end = mid;
//       }
//     }

//     return locs[start] !== undefined ? locs[start] : -1;
//   }

//   const isValid = (word) => {
//     let currIndex = -1;

//     for (const char of word) {
//       if (chars[char]) {
//         currIndex = getNextIndex(chars[char], currIndex);
//         if (currIndex < 0) return false;
//       } else {
//         return false;
//       }
//     }

//     return true;
//   }

//   for (let i = words.length - 1; i >= 0; i--) {
//     if (words[i][0].length > s.length) continue;

//     for (const word of words[i]) {
//       if (isValid(word)) return word;
//     }
//   }

//   return '';
// };

const findLongestWord = (s, d) => {
  d.sort((a, b) => {
    if (a.length !== b.length) return b.length - a.length;
    else return a > b ? 1 : -1;
  });

  const chars = {};

  for (let i = 0; i < s.length; i++) {
    if (chars[s[i]]) {
      chars[s[i]].push(i);
    } else {
      chars[s[i]] = [i];
    }
  }

  const getNextIndex = (locs, target) => {
    let start = 0;
    let end = locs.length;

    while (start < end) {
      const mid = Math.floor((start + end) / 2);
      const index = locs[mid];

      if (index <= target) {
        start = mid + 1;
      } else {
        end = mid;
      }
    }

    return locs[start] !== undefined ? locs[start] : -1;
  };

  const isValid = (word) => {
    let currIndex = -1;

    for (const char of word) {
      if (chars[char]) {
        currIndex = getNextIndex(chars[char], currIndex);
        if (currIndex < 0) return false;
      } else {
        return false;
      }
    }

    return true;
  };

  for (const word of d) {
    if (word.length > s.length) continue;
    if (isValid(word)) return word;
  }

  return '';
};
