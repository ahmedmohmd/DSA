import Command from "./command";

class CompositeCommand implements Command {
  private commands: Array<Command>;

  constructor() {
    this.commands = [];
  }

  public add(command: Command): void {
    this.commands.push(command);
  }

  public excute(): void {
    for (let command of this.commands) {
      command.excute();
    }
  }
}

export default CompositeCommand;
