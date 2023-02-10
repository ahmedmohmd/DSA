import Command from "./command";

class BlackAndWhiteCommand implements Command {
  excute() {
    console.log("Black and White Command");
  }
}

export default BlackAndWhiteCommand;
