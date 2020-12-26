const numDecodings = (s) => {
  const dp = new Array(s.length);
  const MIN = 1,
    MAX = 26;

  const isValid = (chars) => {
    if (chars.charAt(0) === '0') return false;
    if (chars.length === 1) return true;

    return Number(chars) <= MAX;
  };

  dp[0] = 1;
  dp[1] = isValid(s.charAt(0)) ? 1 : 0;

  if (dp[1] === 0) return 0;

  for (let i = 1; i < s.length; i++) {
    const one = s.slice(i, i + 1);
    const two = s.slice(i - 1, i + 1);
    let count = 0;

    if (isValid(two)) count++;
    if (isValid(one)) count++;

    if (count === 0) return 0;
    else if (two === '10' || two === '20') dp[i + 1] = dp[i - 1];
    else if (count === 1) dp[i + 1] = dp[i];
    else if (count === 2) dp[i + 1] = dp[i] + dp[i - 1];
  }

  return dp[s.length];
};
