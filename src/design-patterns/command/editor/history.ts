import UndoableCommand from "./undoable-command";

class History {
  private commands: Array<UndoableCommand>;

  constructor() {
    this.commands = [];
  }

  public push(command: UndoableCommand): void {
    this.commands.push(command);
  }

  public pop(command: UndoableCommand): UndoableCommand {
    return this.commands.pop();
  }
}

export default History;
