const numFactoredBinaryTrees = (arr) => {
  const mod = 10 ** 9 + 7;
  const map = new Map();

  arr.sort((a, b) => a - b);

  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    const end = Math.sqrt(arr[i]);
    let count = 1;

    for (let j = 0; arr[j] <= end; j++) {
      let num = arr[i] / arr[j];

      if (map.has(num))
        count += map.get(arr[j]) * map.get(num) * (arr[j] === num ? 1 : 2);
    }

    map.set(arr[i], count);
    result += count;
  }

  return result % mod;
};
