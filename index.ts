import AVLTree from "./src/data-structres/tree/avlTree";

let avlTree = new AVLTree();

avlTree.insert(12);
avlTree.insert(3);
avlTree.insert(9);
avlTree.insert(4);
avlTree.insert(6);

console.log(JSON.stringify(avlTree));
