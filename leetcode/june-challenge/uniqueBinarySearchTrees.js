const numTrees = (n) => {
  const memo = new Map();
  memo.set(0, 1).set(1, 1).set(2, 2);

  while (memo.size <= n) {
    const num = memo.size;
    let total = 0;

    for (let i = 0; i < num; i++) {
      const left = i;
      const right = num - i - 1;

      total += memo.get(left) * memo.get(right);
    }

    memo.set(num, total);
  }

  return memo.get(n);
};
