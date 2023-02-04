import Tool from "./Tool";

class Canvas {
  state: Tool;

  setState(state: Tool): void {
    this.state = state;
  }

  mouseUp(): void {
    this.state.mouseUp();
  }

  mouseDown(): void {
    this.state.mouseDown();
  }
}

export default Canvas;
