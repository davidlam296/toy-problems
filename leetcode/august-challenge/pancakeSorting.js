const pancakeSort = (A) => {
  let currIndex = A.length - 1;
  const result = [];

  while (currIndex > 0) {
    if (A[currIndex] === currIndex + 1) {
      currIndex--;
    } else {
      if (A[0] === currIndex + 1) {
        A = [...A.slice(0, currIndex + 1).reverse(), ...A.slice(currIndex + 1)];
        result.push(currIndex + 1);
        currIndex--;
      } else {
        let sortIndex;

        for (let i = 0; i < currIndex; i++) {
          if (A[i] === currIndex + 1) {
            sortIndex = i + 1;
            break;
          }
        }

        A = [...A.slice(0, sortIndex).reverse(), ...A.slice(sortIndex)];
        result.push(sortIndex);
      }
    }
  }

  return result;
};
