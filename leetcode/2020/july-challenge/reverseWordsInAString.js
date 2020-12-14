const reverseWords = (s) => {
  return s
    .split(' ')
    .map((w) => w.trim())
    .filter((w) => w.length > 0)
    .reverse()
    .join(' ');
};

const reverseWords = (s) => {
  return s
    .split(' ')
    .reduce((res, w) => {
      w.trim();
      if (w.length > 0) res.unshift(w);

      return res;
    }, [])
    .join(' ');
};
