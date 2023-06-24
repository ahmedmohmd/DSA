import DialogBox from "./dialog-box";
import UiControl from "./ui-control";

class ListBox extends UiControl {
  private selection: string;

  constructor(dialogBox: DialogBox) {
    super(dialogBox);
    this.selection = "";
  }

  public get getSelection(): string {
    return this.selection;
  }

  public set setSelection(selection: string) {
    this.selection = selection;
    this.owner.changed(this);
  }
}

export default ListBox;
