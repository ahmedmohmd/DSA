import BrowserHistory from "./src/design-patterns/iterator/BrowserHistory";

const his = new BrowserHistory<string>();
his.push("Ahmed");
his.push("Mohamed");
his.push("Mahmoud");

const iterator = his.createIterator();
// his.pop();
// his.pop();

while (iterator.isNext()) {
  console.log(iterator.current());
  iterator.next();
}

// console.log(iterator.current());

console.log(his);
