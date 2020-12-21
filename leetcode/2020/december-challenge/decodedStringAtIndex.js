const decodeAtIndex = (S, K) => {
  K = BigInt(K);

  let size = 0n;

  for (const char of S) {
    if (char.charCodeAt(0) >= 97) {
      size++;
    } else {
      size *= BigInt(char);
    }
  }

  for (let i = S.length - 1; i >= 0; i--) {
    const char = S[i];

    K %= size;

    if (K === 0n && char.charCodeAt(0) >= 97) {
      return char;
    }

    if (char.charCodeAt(0) >= 97) {
      size--;
    } else {
      size /= BigInt(char);
    }
  }
};
