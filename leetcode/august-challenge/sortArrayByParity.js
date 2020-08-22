const sortArrayByParity = (A) => {
  const isEven = (n) => {
    return n % 2 === 1;
  };

  A.sort((a, b) => {
    const aEven = isEven(a);
    const bEven = isEven(b);

    if ((aEven && bEven) || (!aEven && !bEven)) return 0;
    else if (aEven && !bEven) return 1;
    else return -1;
  });

  return A;
};

const sortArrayByParity = (A) => {
  A.sort((a, b) => (a % 2) - (b % 2));

  return A;
};
