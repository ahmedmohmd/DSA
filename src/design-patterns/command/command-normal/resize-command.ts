import Command from "./command";

class ResizeCommand implements Command {
  excute(): void {
    console.log("Resize Command");
  }
}

export default ResizeCommand;
