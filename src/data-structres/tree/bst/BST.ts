import BSTNode from "./BSTNode";

class BST {
  root: BSTNode;

  constructor() {
    this.root = null;
  }

  public insert(value: number): void {
    const node = new BSTNode(value);
    let current = this.root;

    if (!this.root) {
      this.root = node;
      return;
    }

    while (true) {
      if (current.value > value) {
        if (!current.left) {
          current.left = node;
          break;
        }

        current = current.left;
      }

      if (!current.right) {
        current.right = node;
        break;
      }

      current = current.right;
    }
  }

  public lookup(value: number): boolean {
    if (!this.root) return false;

    let current = this.root;
    while (current) {
      if (current.value > value) {
        current = current.left;
      } else if (current.value < value) {
        current = current.right;
      } else {
        return true;
      }
    }

    return false;
  }

  public PreOT(node: BSTNode = this.root, result: number[] = []): number[] {
    if (!node) return result;

    result.push(node.value);
    this.PreOT(node.left, result);
    this.PreOT(node.right, result);
  }

  public PostOT(node: BSTNode = this.root, result: number[] = []): number[] {
    if (!node) return result;

    this.PostOT(node.left, result);
    this.PostOT(node.right, result);
    result.push(node.value);
  }

  public InOT(node: BSTNode = this.root, result: number[] = []): number[] {
    if (!node) return result;

    this.InOT(node.left, result);
    result.push(node.value);
    this.InOT(node.right, result);
  }
}

export default BST;
