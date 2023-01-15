import TrieNode from "./trieNode";

class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode("");
  }

  public insert(word: string) {
    let current = this.root;

    for (let char of word) {
      if (!current.hasChild(char)) {
        current.addChild(char);
      }

      current = current.getChild(char);
    }

    current.setEndOfWord(true);
  }

  public postOrderTraverse(node: TrieNode = this.root) {
    for (let char in node.getChildren) {
      this.postOrderTraverse(node.getChild(char));
    }

    console.log(node.value);
  }

  public preOrderTraverse(node: TrieNode = this.root) {
    console.log(node.value);

    for (let char in node.getChildren) {
      this.preOrderTraverse(node.getChild(char));
    }
  }

  public search(word: string): boolean {
    if (!word) return false;

    let current = this.root;

    for (let char of word) {
      if (!current.hasChild(char)) {
        return false;
      }

      current = current.getChild(char);
    }

    return current.getEndOfWord();
  }

  public remove(
    word: string,
    node: TrieNode = this.root,
    index: number = 0
  ): void {
    if (index === word.length) {
      node.setEndOfWord(false);
      return;
    }

    let char = word.charAt(index);
    let child = node.getChild(char);

    if (!child) return;

    this.remove(word, child, index + 1);

    if (!node.getEndOfWord() && !node.hasChildren()) {
      node.removeChild(char);
    }
  }

  private getLastNode(prefix: string): null | TrieNode {
    let current = this.root;

    for (let char of prefix) {
      if (!current.hasChild(char)) {
        return null;
      }

      current = current.getChild(char);
    }

    return current;
  }

  private findWord(
    prefix: string,
    words: string[] = [],
    node: TrieNode = this.root
  ) {
    if (node.getEndOfWord()) {
      words.push(prefix);
    }

    for (let char in node.getChildren()) {
      this.findWord(
        prefix + node.getChild(char).value,
        words,
        node.getChild(char)
      );
    }
  }

  public findWords(prefix: string) {
    const words: string[] = [];

    let lastNode = this.getLastNode(prefix);
    this.findWord(prefix, words, lastNode);

    return words;
  }
}

export default Trie;
