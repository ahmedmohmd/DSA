import LinkedList from "./src/data-structres/linkedlist/linkedList";

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);

list.reverse();
console.log(list.getAllValues());
