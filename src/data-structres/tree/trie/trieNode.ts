class TrieNode {
  private children: {
    [key: string]: TrieNode;
  };
  private isEndOfWord: boolean;
  value: string;

  constructor(value: string = "") {
    this.value = value;
    this.children = {};
    this.isEndOfWord = false;
  }

  public removeChild(char: string) {
    const removeChild = this.children[char];
    delete this.children[char];

    return removeChild;
  }

  public hasChild(char: string) {
    return Boolean(this.children[char]);
  }

  public getChild(char: string) {
    return this.children[char];
  }

  public hasChildren() {
    return Boolean(this.children);
  }

  public addChild(char: string) {
    this.children[char] = new TrieNode(char);
  }

  public endWord() {
    this.isEndOfWord = true;
  }

  get getChildren() {
    return this.children;
  }
}

export default TrieNode;
