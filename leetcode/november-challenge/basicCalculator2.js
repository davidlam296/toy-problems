// const calculate = s => {
//   s = s.replace(/\s+/g, '');

//   const values = [];
//   let curr = '';

//   for (const char of s) {
//     if (char === '+' || char === '-' ||
//         char === '/' || char === '*') {
//       values.push(Number(curr));
//       values.push(char);
//       curr = '';
//     } else {
//       curr += char;
//     }
//   }

//   values.push(Number(curr));

//   for (let i = 0; i < values.length; i++) {
//     if (values[i] === '*') {
//       const res = values[i - 1] * values[i + 1];
//       values.splice(i - 1, 3, res);
//       i--;
//     }

//     if (values[i] === '/') {
//       const res = Math.floor(values[i - 1] / values[i + 1]);
//       values.splice(i - 1, 3, res);
//       i--;
//     }
//   }

//   for (let i = 0; i < values.length; i++) {
//     if (values[i] === '+') {
//       const res = values[i - 1] + values[i + 1];
//       values.splice(i - 1, 3, res);
//       i--;
//     }

//     if (values[i] === '-') {
//       const res = values[i - 1] - values[i + 1];
//       values.splice(i - 1, 3, res);
//       i--;
//     }
//   }

//   return values[0];
// };

const calculate = (s) => {
  s = s.replace(/\s+/g, '');

  const values = [];
  let x = '';

  for (const char of s) {
    if (/\D/.test(char)) {
      values.push(Number(x));
      values.push(char);
      x = '';
    } else {
      x += char;
    }
  }

  values.push(Number(x));

  let result = 0;
  let prev = 0;
  let curr = values[0];

  for (let i = 1; i < values.length; i += 2) {
    const char = values[i];

    if (char === '*') curr *= values[i + 1];
    if (char === '/')
      curr =
        curr > 0
          ? Math.floor(curr / values[i + 1])
          : Math.ceil(curr / values[i + 1]);

    if (char === '+' || char === '-') {
      result += curr;
      curr = char === '+' ? values[i + 1] : -values[i + 1];
    }
  }

  return result + curr;
};
