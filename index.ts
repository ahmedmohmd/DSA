// import BoldCommand from "./src/design-patterns/command/editor/bold-command";
// import History from "./src/design-patterns/command/editor/history";
// import HtmlDocument from "./src/design-patterns/command/editor/html-document";

import AduitTrail from "./src/design-patterns/template/aduitTrail";
import TransferMoneyTask from "./src/design-patterns/template/transfer-money-task";

// // const service = new CustomerService();
// // const command = new AddCustomerCommand(service);
// // const button = new Button("Hello", command);

// // const resize = new ResizeCommand();
// // const b = new BlackAndWhiteCommand();

// // const compisite = new CompositeCommand();
// // compisite.add(resize);
// // compisite.add(b);

// // compisite.excute();

// // button.click();

// const history = new History();
// const document = new HtmlDocument();
// document.setContent("Hello World!");

// const bold = new BoldCommand(document, history);
// bold.excute();

// console.log(document.getContent);

// bold.unexcute();

// console.log(document.getContent);

const aduit = new AduitTrail("Ahmed Mohamed");
const tranfer = new TransferMoneyTask(aduit);

tranfer.excute();
