import Command from "./command";

class ResizeCommand implements Command {
  excute() {
    console.log("Resize Command");
  }
}

export default ResizeCommand;
