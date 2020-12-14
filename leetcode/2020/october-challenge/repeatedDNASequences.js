const findRepeatedDnaSequences = (s) => {
  if (s.length < 11) return [];

  const duplicates = new Set();
  const strands = new Set();

  strands.add(s.substring(0, 10));

  for (let i = 11; i <= s.length; i++) {
    const seq = s.substring(i - 10, i);

    if (strands.has(seq)) duplicates.add(seq);

    strands.add(seq);
  }

  return [...duplicates.values()];
};
