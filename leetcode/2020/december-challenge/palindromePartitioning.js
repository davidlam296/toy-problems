const partition = (s) => {
  const result = [];

  const isPalindrome = (str, start = 0, end = str.length - 1) => {
    while (start <= end) {
      if (str[start++] !== str[end--]) return false;
    }

    return true;
  };

  const search = (remaining, curr = []) => {
    if (remaining.length === 0) return result.push(curr);

    for (let len = 1; len <= remaining.length; len++) {
      const subStr = remaining.slice(0, len);

      if (isPalindrome(subStr)) search(remaining.slice(len), [...curr, subStr]);
    }
  };

  search(s);

  return result;
};

const partition = (s) => {
  const result = [];

  const isPalindrome = (str, start = 0, end = str.length - 1) => {
    while (start <= end) {
      if (str[start++] !== str[end--]) return false;
    }

    return true;
  };

  const search = (remaining, curr = []) => {
    if (remaining.length === 0) return result.push([...curr]);

    for (let len = 1; len <= remaining.length; len++) {
      const subStr = remaining.slice(0, len);

      if (isPalindrome(subStr)) {
        curr.push(subStr);
        search(remaining.slice(len), curr);
        curr.pop();
      }
    }
  };

  search(s);

  return result;
};
