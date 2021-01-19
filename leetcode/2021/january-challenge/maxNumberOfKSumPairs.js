const maxOperations = (nums, k) => {
  const freq = new Map();
  const HALF = k / 2;
  let operations = 0;
  
  nums.forEach(num => freq.set(num, (freq.get(num) || 0) + 1));
  freq.forEach((count, num) => operations += num < HALF ? Math.min(freq.get(k - num) || 0, count) : 0);
  
  if (freq.has(HALF)) operations += Math.floor(freq.get(HALF) / 2);
  
  return operations;
};