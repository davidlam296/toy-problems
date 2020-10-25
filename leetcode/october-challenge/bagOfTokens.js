const bagOfTokensScore = (tokens, P) => {
  let maxScore = 0;
  let currScore = 0;

  tokens.sort((a, b) => a - b);

  while (tokens.length > 0) {
    if (tokens[0] <= P) {
      P -= tokens.shift();
      currScore++;
      maxScore = Math.max(maxScore, currScore);
    } else {
      if (currScore > 0) {
        P += tokens.pop();
        currScore--;
      } else {
        return maxScore;
      }
    }
  }

  return maxScore;
};
