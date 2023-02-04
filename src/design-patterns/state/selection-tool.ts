import Tool from "./Tool";

class SelectionTool implements Tool {
  mouseUp(): void {
    console.log("Mouse Keyup from SelectionTool Tool.");
  }

  mouseDown(): void {
    console.log("Mouse Keydown from SelectionTool Tool.");
  }
}

export default SelectionTool;
