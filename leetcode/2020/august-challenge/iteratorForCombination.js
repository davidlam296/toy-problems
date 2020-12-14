class CombinationIterator {
  constructor(characters, combinationLength) {
    this.combinations = [];
    this.currIndex = 0;

    const NUM_CHARS = characters.length;

    const findCombos = (index, curr = []) => {
      if (curr.length === combinationLength) {
        this.combinations.push(curr.join(''));
        return;
      }

      if (index === NUM_CHARS) return;

      for (let i = index; i < NUM_CHARS; i++) {
        findCombos(i + 1, [...curr, characters[i]]);
      }
    };

    findCombos(0);
  }

  /**
   * @return {string}
   */
  next() {
    return this.combinations[this.currIndex++];
  }

  /**
   * @return {boolean}
   */
  hasNext() {
    return !!this.combinations[this.currIndex];
  }
}
