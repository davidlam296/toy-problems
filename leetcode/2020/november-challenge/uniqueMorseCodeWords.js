const uniqueMorseRepresentations = (words) => {
  const code = {
    a: '.-',
    b: '-...',
    c: '-.-.',
    d: '-..',
    e: '.',
    f: '..-.',
    g: '--.',
    h: '....',
    i: '..',
    j: '.---',
    k: '-.-',
    l: '.-..',
    m: '--',
    n: '-.',
    o: '---',
    p: '.--.',
    q: '--.-',
    r: '.-.',
    s: '...',
    t: '-',
    u: '..-',
    v: '...-',
    w: '.--',
    x: '-..-',
    y: '-.--',
    z: '--..',
  };

  const transformations = new Set();

  for (const word of words) {
    let transformed = '';

    for (const char of word) {
      transformed += code[char];
    }

    transformations.add(transformed);
  }

  return transformations.size;
};
