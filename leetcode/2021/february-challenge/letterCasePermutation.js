const letterCasePermutation = (S) => {
  const result = [];
  const LOWER = 'abcdefghijklmnopqrstuvwxyz';
  const CAPS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  // uppercase: 65-90
  // lowercase: 97-122
  // 0-9: 48-57

  const getPerms = (index, curr = S) => {
    if (index === S.length) return result.push(curr);

    const char = S[index];
    const charCode = S[index].charCodeAt(0);

    if (charCode < 58) getPerms(index + 1, curr);
    else {
      const otherChar =
        charCode > 90 ? CAPS[charCode - 97] : LOWER[charCode - 65];
      const otherStr =
        index > 0
          ? curr.slice(0, index) + otherChar + curr.slice(index + 1)
          : otherChar + curr.slice(1);

      getPerms(index + 1, curr);
      getPerms(index + 1, otherStr);
    }
  };

  getPerms(0);

  return result;
};
