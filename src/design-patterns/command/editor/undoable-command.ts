import Command from "./command";

interface UndoableCommand extends Command {
  unexcute: () => void;
}

export default UndoableCommand;
