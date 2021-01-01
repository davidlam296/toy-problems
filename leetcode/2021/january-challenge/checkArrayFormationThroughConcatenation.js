const canFormArray = (arr, pieces) => {
  const pieceStarts = new Map();

  for (const [i, piece] of pieces.entries()) {
    pieceStarts.set(piece[0], i);
  }

  let index = 0;

  while (index < arr.length) {
    if (pieceStarts.has(arr[index])) {
      const pieceIndex = pieceStarts.get(arr[index]);

      for (const p of pieces[pieceIndex]) {
        if (p !== arr[index]) return false;
        index++;
      }
    } else {
      return false;
    }
  }

  return true;
};
