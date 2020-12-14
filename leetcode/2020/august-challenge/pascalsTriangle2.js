const getRow = (rowIndex) => {
  let result = [1];

  while (rowIndex > 0) {
    const newResult = [];
    newResult.push(1);

    for (let i = 0; i < result.length - 1; i++) {
      newResult.push(result[i] + result[i + 1]);
    }

    newResult.push(1);
    result = newResult;
    rowIndex--;
  }

  return result;
};
