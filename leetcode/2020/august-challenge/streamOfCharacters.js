class StreamChecker {
  constructor(words) {
    this.trie = {};
    this.longest = 0;
    this.searched = [];

    for (const word of words) {
      let currTrieNode = this.trie;

      for (let i = word.length - 1; i >= 0; i--) {
        const char = word[i];
        if (!currTrieNode[char]) {
          currTrieNode[char] = {};
        }
        currTrieNode = currTrieNode[char];
      }
      currTrieNode.done = true;

      if (word.length > this.longest) this.longest = word.length;
    }
  }

  query(letter) {
    if (this.searched.length === this.longest) {
      this.searched.shift();
    }

    this.searched.push(letter);

    let currTrieNode = this.trie;

    for (let i = this.searched.length - 1; i >= 0; i--) {
      const char = this.searched[i];

      if (currTrieNode.done) return true;
      if (!currTrieNode[char]) break;

      currTrieNode = currTrieNode[char];
    }

    return currTrieNode.done || false;
  }
}
