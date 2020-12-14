const longestDupSubstring = (s) => {
  let result = '';

  const singleCharCheck = () => {
    const c = s[0];
    for (const char of s) {
      if (char !== c) return false;
    }

    return true;
  };

  if (singleCharCheck()) return s.slice(0, s.length - 1);

  const check = (str, matching) => {
    if (matching.size < 2) return;
    if (str.length > result.length) result = str;

    const options = {};

    for (const idx of matching) {
      const tempStr = s.slice(idx, idx + str.length + 1);
      if (options[tempStr]) options[tempStr].push(idx);
      else options[tempStr] = [idx];
    }

    for (const option in options) {
      if (option.length > str.length) {
        check(option, new Set([...options[option]]));
      }
    }
  };

  const chars = new Map();

  for (let i = 0; i < s.length; i++) {
    (chars.has(s[i])
      ? chars.get(s[i])
      : chars.set(s[i], new Set()).get(s[i])
    ).add(i);
  }

  chars.forEach((indexes, char) => {
    check(char, indexes);
  });

  return result;
};

const longestDupSubstring = (s) => {
  const singleCharCheck = () => {
    const c = s[0];
    for (const char of s) {
      if (char !== c) return false;
    }

    return true;
  };

  if (singleCharCheck()) return s.slice(0, s.length - 1);

  const chars = [];
  const mod = 2 ** 32;
  const max = s.length;

  for (let i = 0; i < max; i++) {
    chars[i] = s[i].charCodeAt(0) - 97;
  }

  const search = (length) => {
    const hashValues = new Set();
    let hash = 0;

    for (let i = 0; i < length; i++) {
      hash = (hash * 26 + chars[i]) % mod;
    }

    let removeMod = 1;

    for (let i = 0; i < length; i++) {
      removeMod = (removeMod * 26) % mod;
    }

    hashValues.add(hash);

    for (let i = 1; i < max - length + 1; i++) {
      hash =
        (((hash * 26 - ((chars[i - 1] * removeMod) % mod) + mod) % mod) +
          chars[i + length - 1]) %
        mod;

      if (hashValues.has(hash)) return s.slice(i, i + length);
      else hashValues.add(hash);
    }
    return '';
  };

  // Binary length check
  let start = 0;
  let end = max;
  let result = '';

  while (start < end) {
    const mid = Math.floor((end + start) / 2);
    const res = search(mid);

    if (res) {
      result = res;
      start = mid + 1;
    } else {
      end = mid;
    }
  }

  return result;
};
