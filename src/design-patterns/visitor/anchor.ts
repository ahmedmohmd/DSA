import HtmlNode from "./html-node";
import Operation from "./operation";

class Anchor implements HtmlNode {
  excute(operation: Operation): void {
    operation.applyAnchor(this);
  }
}

export default Anchor;
