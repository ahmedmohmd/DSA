import BST from "./src/data-structres/tree/bst/binary-serach-tree";

const tree = new BST();

tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
// console.log(JSON./stringify(tree));

tree.breathFistSearch();

// console.log(tree.lookup(1));
