const toGoatLatin = (S) => {
  if (S.length < 1) return '';

  const words = S.split(' ');
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

  return words
    .map((word, index) => {
      const updatedWord = [];

      if (vowels.has(word[0])) {
        updatedWord.push(word);
      } else {
        updatedWord.push(word.slice(1), word[0]);
      }

      updatedWord.push('ma');
      for (let i = 0; i < index + 1; i++) {
        updatedWord.push('a');
      }

      return updatedWord.join('');
    })
    .join(' ');
};
