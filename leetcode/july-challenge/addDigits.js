const addDigits = (num) => (isNaN(num) ? 0 : num < 10 ? num : num % 9 || 9);
