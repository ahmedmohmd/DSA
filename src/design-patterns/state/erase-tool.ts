import Tool from "./Tool";

class EraseTool implements Tool {
  mouseUp(): void {
    console.log("Mouse Keyup from EraseTool Tool.");
  }

  mouseDown(): void {
    console.log("Mouse Keydown from EraseTool Tool.");
  }
}

export default EraseTool;
