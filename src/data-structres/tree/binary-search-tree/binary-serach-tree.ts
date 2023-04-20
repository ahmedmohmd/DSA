import BSTNode from "./bst-node";

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

  remove(value) {
    if (!this.root) {
      return false; // If the tree is empty, the node cannot be found
    }

    let current = this.root;
    let parent: any = null;
    let direction: any = null;

    // Search for the node to remove
    while (current) {
      if (value === current.value) {
        break; // Node found
      } else if (value < current.value) {
        parent = current;
        current = current.left;
        direction = "left";
      } else {
        parent = current;
        current = current.right;
        direction = "right";
      }
    }

    if (!current) {
      return false; // If the node was not found, return false
    }

    // Case 1: Node has no children
    if (!current.left && !current.right) {
      if (!parent) {
        this.root = null; // If the root is the only node, set the tree to empty
      } else {
        parent[direction] = null; // Otherwise, remove the node from the parent
      }

      // Case 2: Node has one child
    } else if (!current.left || !current.right) {
      const child = current.left || current.right; // Get the child node
      if (!parent) {
        this.root = child; // If the root is the node to remove, replace it with the child
      } else {
        parent[direction] = child; // Otherwise, replace the node with its child
      }

      // Case 3: Node has two children
    } else {
      let successorParent = current;
      let successor = current.right;

      while (successor.left) {
        successorParent = successor;
        successor = successor.left;
      }

      if (successorParent !== current) {
        successorParent.left = successor.right;
        successor.right = current.right;
      }

      successor.left = current.left;

      if (!parent) {
        this.root = successor;
      } else {
        parent[direction] = successor;
      }
    }

    return true; // Node removed successfully
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
