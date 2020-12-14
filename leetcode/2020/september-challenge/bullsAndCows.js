const getHint = (secret, guess) => {
  let bulls = 0;
  let cows = 0;

  const digits = new Map();
  const guesses = new Map();

  for (let i = 0; i < secret.length; i++) {
    if (guess[i] === secret[i]) {
      bulls++;
    } else {
      digits.set(secret[i], digits.get(secret[i]) + 1 || 1);
      guesses.set(guess[i], guesses.get(guess[i]) + 1 || 1);
    }
  }

  guesses.forEach((value, num) => {
    cows += Math.min(digits.get(num) || 0, value);
  });

  return `${bulls}A${cows}B`;
};
