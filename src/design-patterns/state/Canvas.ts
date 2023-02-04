import Tool from "./Tool";
class Canvas {
  currentTool: Tool;

  setState(tool: Tool): void {
    this.currentTool = tool;
  }

  mouseUp(): void {
    this.currentTool.mouseUp();
  }

  mouseDown(): void {
    this.currentTool.mouseDown();
  }
}

export default Canvas;
