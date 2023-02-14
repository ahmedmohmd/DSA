import Operation from "./operation";

interface HtmlNode {
  excute(operation: Operation): void;
}

export default HtmlNode;
