const countVowelStrings = n => {
  const map = new Map();
  let count = 0;
  
  const search = (len = 0, start = 0) => {
    if (len === n) return count++;
    
    for (let i = start; i < 5; i++) {
      search(len + 1, i);
    }
  }
  
  search();
  
  return count;
};