import HtmlNode from "./html-node";

interface Operation {
  applyAnchor(anchor: HtmlNode): void;
  applyHeading(heading: HtmlNode): void;
}

export default Operation;
