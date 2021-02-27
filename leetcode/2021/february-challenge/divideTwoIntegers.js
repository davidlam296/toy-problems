// const divide = (dividend, divisor) => {
//   if (dividend === 0) return 0;
//   if (divisor === 1) return dividend;

//   const negative =
//     dividend < 0 && divisor > 0 ? true :
//     dividend > 0 && divisor < 0 ? true : false;

//   dividend = Math.abs(dividend);
//   divisor = Math.abs(divisor);

//   let res = 0;

//   while (dividend >= divisor) {
//     res++;
//     dividend -= divisor;
//   }

//   return res > 0 && negative ? Number('-' + res) : res;
// };

const divide = (dividend, divisor) => {
  if (dividend === -2147483648 && divisor === -1) return 2147483647;
  if (dividend === 0 || dividend.length < divisor.length) return 0;
  if (divisor === 1) return dividend;
  if (divisor === -1) return -dividend;

  const negative =
    dividend < 0 && divisor > 0
      ? true
      : dividend > 0 && divisor < 0
      ? true
      : false;

  dividend = '' + Math.abs(dividend);
  divisor = Math.abs(divisor);

  if (dividend < divisor) return 0;

  const solve = (num) => {
    num = Number(num);

    if (num < divisor) return [0, num];

    let count = 1;
    let val = divisor;

    while (val + divisor <= num) {
      count++;
      val += divisor;
    }

    return [count, num - val];
  };

  const DIVS_LEN = divisor.toString().length;

  let result = '';
  let curr = '';
  let index = 0;

  while (curr.length < DIVS_LEN || Number(curr) < divisor) {
    curr += dividend[index];
    index++;
  }

  while (index <= dividend.length) {
    const [quo, rem] = solve(curr);

    result += quo;

    if (rem === 0) {
      curr = dividend[index];
    } else {
      curr = '' + rem + dividend[index];
    }

    index++;
  }

  return negative ? Number('-' + result) : Number(result);
};
