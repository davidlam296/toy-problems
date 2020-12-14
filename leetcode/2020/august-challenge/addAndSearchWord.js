class WordDictionary {
  constructor() {
    this.dict = {};
  }

  addWord(word) {
    let trie = this.dict;

    for (const char of word) {
      if (!trie.hasOwnProperty(char)) trie[char] = {};
      trie = trie[char];
    }

    trie.word = word;
  }

  search(word, index = 0, trie = this.dict) {
    if (trie.word === word) return true;
    if (index == -word.length) return false;

    const char = word.charAt(index);

    if (char === '.') {
      for (const ch in trie) {
        const newWord =
          index === 0
            ? ch + word.slice(index + 1)
            : word.slice(0, index) + ch + word.slice(index + 1);

        if (this.search(newWord, index + 1, trie[ch])) return true;
      }

      return false;
    } else {
      return trie.hasOwnProperty(char)
        ? this.search(word, index + 1, trie[char])
        : false;
    }
  }
}
