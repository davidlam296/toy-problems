// const concatenatedBinary = n => {
//   const mod = 10 ** 9 + 7;
//   let result = 0;

//   for (let i = 1; i <= n; i++) {
//     result *= 2 ** i.toString(2).length;
//     result += i;
//     result %= mod;
//   }

//   return result;
// };

const concatenatedBinary = (n) => {
  const mod = 10 ** 9 + 7;
  let result = 1;
  let limit = 4;

  for (let i = 2; i <= n; i++) {
    if (i === limit) limit <<= 1;

    result = (result * limit + i) % mod;
  }

  return result;
};
