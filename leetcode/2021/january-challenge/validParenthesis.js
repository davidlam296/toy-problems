const isValid = s => {
  const stack = [];
  
  const LEGEND = {
    '(' : 1,
    '{' : 2,
    '[' : 3,
    ')' : 1,
    '}' : 2,
    ']' : 3
  }
  
  for (const char of s) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(LEGEND[char]);
    } else {
      if (stack.pop() !== LEGEND[char]) return false;
    }
  }
  
  return stack.length === 0;
};