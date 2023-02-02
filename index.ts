import Document from "./src/design-patterns/memento/Document";
import History from "./src/design-patterns/memento/History";

const doc = new Document();
const his = new History();

doc.setWord("Ahmed");
his.push(doc.createState());

doc.setWord("Mohamed");
his.push(doc.createState());

doc.setWord("Mahmoud");
doc.restore(his.pop());
doc.restore(his.pop());

console.log(JSON.stringify(doc));
console.log(JSON.stringify(his));
