const advantageCount = (A, B) => {
  const result = new Array(A.length);

  A.sort((a, b) => b - a);

  const bMap = B.map((n, idx) => [n, idx]).sort(
    ([numA], [numB]) => numB - numA
  );

  let start = 0;
  let end = A.length - 1;

  for (let i = 0; i < bMap.length; i++) {
    const [num, index] = bMap[i];

    if (num >= A[start]) {
      result[index] = A[end];
      end--;
    } else {
      result[index] = A[start];
      start++;
    }
  }

  return result;
};
