const climbStairs = (n) => {
  let result = 1;
  let prev = 1;

  while (n > 1) {
    const temp = result;
    result = prev + result;
    prev = temp;
    n--;
  }

  return result;
};
