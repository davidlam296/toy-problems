const largestComponentSize = (A) => {
  const checkPrimes = new Array(100000).fill(true);
  const primes = [];

  for (let i = 2; i * i < 100000; i++) {
    if (checkPrimes[i]) {
      for (let j = i * i; j < 100000; j += i) {
        checkPrimes[j] = false;
      }
    }
  }

  for (let i = 2; i < checkPrimes.length; i++) {
    if (checkPrimes[i]) primes.push(i);
  }

  const map = {};
  const factorMap = {};

  for (const num of A) {
    factorMap[num] = new Set();

    for (let i = 0; i < primes.length; i++) {
      if (num < primes[i]) break;
      if (num % primes[i] === 0) {
        factorMap[num].add(primes[i]);

        if (!map[primes[i]]) map[primes[i]] = [num];
        else map[primes[i]].push(num);
      }
    }
  }

  // Keep track of checked prime numbers in map
  const checked = new Set();

  let result = 0;

  let totalChecked = 0;
  let remainder = A.length;

  // Numbers in queue of current grouping
  let currentGroup = new Set();
  let queue = [];

  for (const prime in map) {
    if (checked.has(Number(prime))) continue;

    checked.add(Number(prime));

    for (const num of map[prime]) {
      queue.push(num);
      currentGroup.add(num);
    }

    while (queue.length > 0) {
      const factors = factorMap[queue.shift()];

      for (const factor of factors) {
        if (!checked.has(factor)) {
          checked.add(factor);

          for (const num of map[factor]) {
            if (!currentGroup.has(num)) queue.push(num);
            currentGroup.add(num);
          }
        }
      }
    }

    result = Math.max(result, currentGroup.size);

    totalChecked += currentGroup.size;
    remainder -= currentGroup.size;

    if (result >= remainder) break;

    currentGroup = new Set();
  }

  return result;
};
