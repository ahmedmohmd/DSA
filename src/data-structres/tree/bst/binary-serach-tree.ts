import Node from "./utils/node";

class BST {
  root: any;

  constructor() {
    this.root = null;
  }

  public insert(value: number): void {
    const node = new Node(value);

    if (!this.root) {
      this.root = node;
      return;
    }

    let current = this.root;
    while (true) {
      if (current.value > value) {
        if (!current.left) {
          current.left = node;
          break;
        }

        current = current.left;
      } else {
        if (!current.right) {
          current.right = node;
          break;
        }

        current = current.right;
      }
    }
  }

  public lookup(value: number): boolean {
    if (!this.root) return false;

    // Something Here
    let current: Node | null = this.root;

    while (current !== null) {
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

  public remove(value: number) {
    if (!this.root) {
      return false;
    }

    let current: any = this.root;
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

  public breathFistSearch(node: Node | null = this.root): void {
    if (!node) throw new Error("Sorry, there is no elements in The Tree!");

    const queue = [node];

    while (queue.length > 0) {
      let current = queue.shift();

      if (!current) break;

      console.log(current?.value);

      if (current?.left !== null) {
        queue.push(current.left);
      }
      if (current?.right !== null) {
        queue.push(current.right);
      }
    }
  }

  public preOrderTraverse(node: Node | null = this.root): void {
    if (!node) return;

    console.log(node.value);
    this.preOrderTraverse(node.left);
    this.preOrderTraverse(node.right);
  }

  public postOrderTraverse(node: Node | null = this.root): void {
    if (!node) return;

    this.postOrderTraverse(node.left);
    this.postOrderTraverse(node.right);
    console.log(node.value);
  }

  public inOrderTraverse(node: Node | null = this.root): void {
    if (!node) return;

    this.inOrderTraverse(node.left);
    console.log(node.value);
    this.inOrderTraverse(node.right);
  }
}

export default BST;
