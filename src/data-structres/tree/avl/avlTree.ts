import AVLNode from "./avlNode";

class AVLTree {
  root: AVLNode | null;

  constructor() {
    this.root = null;
  }

  insert(value: number): void {
    let node = new AVLNode(value);

    if (!this.root) {
      this.root = node;
    } else {
      let current = this.root;

      while (true) {
        if (current.value > value) {
          if (!current.leftChild) {
            current.leftChild = node;
            break;
          }

          current = current.leftChild;
        }

        if (!current.rightChild) {
          current.rightChild = node;
          break;
        }

        current = current.rightChild;
      }
    }

    this.updatHeights();
  }

  private getHeight(node: AVLNode | null): number {
    if (!node) {
      return -1;
    } else {
      return node.height;
    }
  }

  public bfs() {
    let queue = [this.root];
    const list = [];

    while (queue.length > 0) {
      let current = queue.shift();
      list.push(current);

      if (current?.leftChild) {
        queue.push(current.leftChild);
      }

      if (current?.rightChild) {
        queue.push(current.rightChild);
      }
    }

    return list;
  }

  private updatHeights() {
    const result = this.bfs().reverse();
    result.map((node) => {
      if (node) {
        node.height =
          Math.max(
            this.getHeight(node.leftChild),
            this.getHeight(node.rightChild)
          ) + 1;

        this.balance(node as AVLNode);
      }
    });
  }

  private isLeftHeavy(node: AVLNode): boolean {
    const balanceFactor = this.calculateBalanceFactor(node);

    return balanceFactor > 1;
  }

  private isRightHeavy(node: AVLNode): boolean {
    const balanceFactor = this.calculateBalanceFactor(node);

    return balanceFactor < -1;
  }

  private calculateBalanceFactor(node: AVLNode | null) {
    if (!node) {
      return 0;
    }

    const factor =
      this.getHeight(node.leftChild) - this.getHeight(node.rightChild);
    return factor;
  }

  private balance(node: AVLNode) {
    if (this.isLeftHeavy(node)) {
      if (this.calculateBalanceFactor(node.leftChild) < 0) {
        node.leftChild = this.rotateLeft(node.leftChild);
      }
      return this.rotateRight(node);
    } else if (this.isRightHeavy(node)) {
      if (this.calculateBalanceFactor(node.rightChild) > 0) {
        node.rightChild = this.rotateRight(node.rightChild);
      }
      return this.rotateLeft(node);
    }
  }

  private setHeight(node: AVLNode) {
    node.height =
      Math.max(
        this.getHeight(node.leftChild),
        this.getHeight(node.rightChild)
      ) + 1;
  }

  private rotateLeft(node: AVLNode): AVLNode {
    const newRoot = node.rightChild;
    node.rightChild = newRoot.leftChild;
    newRoot.leftChild = node;

    this.setHeight(node);
    this.setHeight(newRoot);

    return newRoot;
  }

  private rotateRight(node: AVLNode): AVLNode {
    const newRoot = node.leftChild;
    node.leftChild = newRoot.rightChild;
    newRoot.rightChild = node;

    this.setHeight(node);
    this.setHeight(newRoot);

    return newRoot;
  }
}

export default AVLTree;
