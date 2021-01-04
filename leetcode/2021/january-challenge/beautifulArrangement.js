const countArrangement = (n) => {
  const nums = new Array(n).fill(0).map((v, i) => i + 1);
  let result = 0;

  const search = (index = 1, rem = [...nums]) => {
    if (rem.length === 0) return result++;

    for (const [i, num] of rem.entries()) {
      if (index % num === 0 || num % index === 0)
        search(
          index + 1,
          rem.filter((n) => n !== num)
        );
    }
  };

  search();

  return result;
};
