import Tool from "./Tool";

class BrushTool implements Tool {
  mouseUp(): void {
    console.log("Mouse Keyup from BrushTool Tool.");
  }

  mouseDown(): void {
    console.log("Mouse Keydown from BrushTool Tool.");
  }
}

export default BrushTool;
