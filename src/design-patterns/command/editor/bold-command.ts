import History from "./history";
import HtmlDocument from "./html-document";
import UndoableCommand from "./undoable-command";

class BoldCommand implements UndoableCommand {
  private prevContent: string;
  private htmlDocument: HtmlDocument;
  private history: History;

  constructor(htmlDocument: HtmlDocument, history: History) {
    this.htmlDocument = htmlDocument;
    this.history = history;
  }

  excute() {
    this.prevContent = this.htmlDocument.getContent;
    this.htmlDocument.makeBold();
    this.history.push(this);
  }
  
  unexcute() {
    this.htmlDocument.setContent(this.prevContent);
  }
}

export default BoldCommand;
