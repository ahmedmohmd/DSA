class TrieNode {
  children: {
    [key: string]: TrieNode;
  };
  isEndOfWord: boolean;
  value: string;

  constructor(value: string = "") {
    this.value = value;
    this.children = {};
    this.isEndOfWord = false;
  }

  public removeChild(char: string) {
    const removedChild = this.children[char];
    delete this.children[char];

    return removedChild;
  }

  public hasChild(char: string) {
    return Boolean(this.children[char]);
  }

  public getChild(char: string) {
    return this.children[char];
  }

  public hasChildren() {
    return Object.keys(this.children).length > 0;
  }

  public addChild(char: string): void {
    this.children[char] = new TrieNode(char);
  }

  public setEndOfWord(value: boolean): void {
    this.isEndOfWord = value;
  }

  public getEndOfWord(): boolean {
    return this.isEndOfWord === true;
  }

  public getChildren() {
    return this.children;
  }
}

export default TrieNode;
