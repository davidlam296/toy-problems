const lengthOfLastWord = (s) => {
  if (!s) return 0;

  const words = s.split(' ').filter((word) => (word.length > 0 ? true : false));

  return words.length > 0 ? words[words.length - 1].length : 0;
};
