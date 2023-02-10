import Command from "./command";

class Button {
  private label: string;
  private command: Command;

  constructor(label: string, command: Command) {
    this.label = label;
    this.command = command;
  }

  public click() {
    this.command.excute();
  }
}

export default Button;
