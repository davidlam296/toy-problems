const reverseBits = (n) =>
  parseInt(n.toString(2).padStart(32, '0').split('').reverse().join(''), 2);
