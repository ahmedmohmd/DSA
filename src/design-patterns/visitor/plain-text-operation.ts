import HtmlNode from "./html-node";
import Operation from "./operation";

class PlainTextOperation implements Operation {
  applyAnchor(anchor: HtmlNode): void {
    console.log("Plain Text: Anchor Eelement");
  }
  applyHeading(heading: HtmlNode): void {
    console.log("Plain Text: Heading Eelement");
  }
}

export default PlainTextOperation;
