const bitwiseComplement = (N) => {
  const str = N.toString(2);
  const newNum = [];

  for (let i = 0; i < str.length; i++) {
    str[i] === '0' ? newNum.push('1') : newNum.push('0');
  }

  return parseInt(newNum.join(''), 2);
};
