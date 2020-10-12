const buddyStrings = (A, B) => {
  if (A.length < 2 || A.length !== B.length) return false;

  const charsA = new Array(26).fill(0);
  const charsB = new Array(26).fill(0);
  const exist = new Set();

  let numNotMatching = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] !== B[i]) numNotMatching++;
    if (numNotMatching > 2) return false;

    exist.add(A[i].charCodeAt() - 97);
    charsA[A[i].charCodeAt() - 97]++;
    charsB[B[i].charCodeAt() - 97]++;
  }

  let duplicate = false;

  for (const i of exist) {
    if (charsA[i] !== charsB[i]) return false;
    if (charsA[i] > 1) duplicate = true;
  }

  if (numNotMatching === 0 && !duplicate) return false;

  return true;
};
