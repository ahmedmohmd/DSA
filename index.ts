import Trie from "./src/data-structres/tree/trie/trie";

const trie = new Trie();
trie.insert("car");
trie.insert("cat");

// console.log(trie.findWords("c"));

trie.remove("car");
trie.remove("cat");
console.log(JSON.stringify(trie));
