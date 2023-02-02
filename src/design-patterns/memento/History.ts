import DocumentState from "./DocumentState";

class History {
  private stack: DocumentState[];

  constructor() {
    this.stack = [];
  }

  public push(state: DocumentState): void {
    this.stack.push(state);
  }

  public pop(): DocumentState {
    const lastState = this.stack.pop();
    return lastState;
  }
}

export default History;
