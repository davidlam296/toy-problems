const mirrorReflection = (p, q) => {
  if (q === 0) return 0;
  if (q === p) return 1;

  let reverse = q;
  let reflect = p;

  // Have to reduce if both are even numbers
  while (reverse % 2 === 0 && reflect % 2 === 0) {
    reverse /= 2;
    reflect /= 2;
  }

  if (reverse % 2 === 0 && reflect % 2 === 1) return 0;
  if (reverse % 2 === 1 && reflect % 2 === 1) return 1;
  if (reverse % 2 === 1 && reflect % 2 === 0) return 2;
};
