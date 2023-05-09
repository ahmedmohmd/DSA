class BSTNode {
  left: BSTNode | null;
  right: BSTNode | null;
  value: number;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export default BSTNode;
