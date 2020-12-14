const fizzBuzz = (n) => {
  const result = [];

  for (let i = 1; i <= n; i++) {
    result.push(
      i % 3 === 0 && i % 5 === 0
        ? 'FizzBuzz'
        : i % 3 === 0
        ? 'Fizz'
        : i % 5 === 0
        ? 'Buzz'
        : i + ''
    );
  }

  return result;
};
