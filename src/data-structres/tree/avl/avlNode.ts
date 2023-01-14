class AVLNode {
  value: number;
  leftChild: AVLNode | null;
  rightChild: AVLNode | null;
  height: number;

  constructor(value: number) {
    this.value = value;
    this.leftChild = null;
    this.rightChild = null;
    this.height = 0;
  }
}

export default AVLNode;
