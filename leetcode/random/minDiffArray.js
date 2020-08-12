const minDiffArray = (arr1, arr2) => {
  let min = 0;
  const diff = [];
  const digits = new Set();

  for (let i = 0; i < arr1.length; i++) {
    const value = Math.abs(arr1[i] - arr2[i]);
    diff[i] = value;
    digits.add(arr1[i]);
    min += value;
  }

  if (min === 0) return min;

  const base = min;

  for (let i = 0; i < diff.length; i++) { // i = 0
    if (diff[i] === 0) continue; // diff[0] = 4

    for (const digit of digits) {
      if (digit === arr1[i]) continue; // Skip 1, digit = 3 digit = 5

      const value = Math.abs(digit - arr2[i]) // 5 - 5 = 0
      const change = diff[i] - value; // diff[0] = 4 - 0 = 4
      const john = base - change; // 8 - 4 = 4
      min = Math.min(min, john); // 4
    }
  }

  return min;
}

// const a1 = [1, 3, 5];
// const a2 = [5, 3, 1];

const a1 = [1,2,3,4,5,6,7,8,9];
const a2 = [9,8,7,6,5,4,3,2,1];

console.log(minDiffArray(a1, a2));