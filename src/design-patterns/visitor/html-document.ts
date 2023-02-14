import HtmlNode from "./html-node";
import Operation from "./operation";

class HtmlDocument {
  private nodes: Array<HtmlNode>;

  constructor() {
    this.nodes = [];
  }

  public addNode(node: HtmlNode): void {
    this.nodes.push(node);
  }

  public excute(operation: Operation): void {
    this.nodes.forEach((node) => {
      node.excute(operation);
    });
  }
}

export default HtmlDocument;
