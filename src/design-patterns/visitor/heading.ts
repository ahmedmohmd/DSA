import HtmlNode from "./html-node";
import Operation from "./operation";

class Heading implements HtmlNode {
  excute(operation: Operation): void {
    operation.applyHeading(this);
  }
}

export default Heading;
