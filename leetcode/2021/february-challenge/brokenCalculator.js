const brokenCalc = (X, Y) => {
  let ops = 0;

  while (Y > X) {
    if (Y % 2 === 0) Y /= 2;
    else Y++;

    ops++;
  }

  return ops + (X - Y);
};
