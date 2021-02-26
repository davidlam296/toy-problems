const validateStackSequences = (pushed, popped) => {
  const stack = [];
  const visited = new Set();

  let index = 0;

  for (const num of popped) {
    if (stack[stack.length - 1] === num) {
      stack.pop();
    } else {
      if (visited.has(num)) return false;

      while (index < pushed.length) {
        if (pushed[index] === num) {
          index++;
          break;
        }

        visited.add(pushed[index]);
        stack.push(pushed[index]);
        index++;
      }
    }
  }

  return true;
};
