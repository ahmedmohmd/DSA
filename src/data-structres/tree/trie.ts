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

    current.endWord();
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
}

export default Trie;
