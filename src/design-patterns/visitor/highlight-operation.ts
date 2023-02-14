import HtmlNode from "./html-node";
import Operation from "./operation";

class HightlightOperation implements Operation {
  applyHeading(heading: HtmlNode): void {
    console.log("Hightlight Heading Element");
  }

  applyAnchor(anchor: HtmlNode): void {
    console.log("Hightlight Anchor Element");
  }
}

export default HightlightOperation;
