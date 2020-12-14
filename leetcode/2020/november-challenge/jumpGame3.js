const canReach = (arr, start) => {
  const memo = new Set();
  let reached = false;

  const jump = (loc) => {
    if (reached) return;

    const leftIndex = `${loc}-left`;
    const rightIndex = `${loc}-right`;

    if (arr[loc] === 0) {
      reached = true;
      return;
    }

    if (!memo.has(leftIndex)) {
      memo.add(leftIndex);

      const jumpLoc = loc - arr[loc];

      if (jumpLoc >= 0) jump(jumpLoc);
    }

    if (!memo.has(rightIndex)) {
      memo.add(rightIndex);

      const jumpLoc = loc + arr[loc];

      if (jumpLoc <= arr.length - 1) jump(jumpLoc);
    }
  };

  jump(start);

  return reached;
};
