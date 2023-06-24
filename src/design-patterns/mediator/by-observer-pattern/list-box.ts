import UiControl from "./ui-control";

class ListBox extends UiControl {
  private selection: string;

  constructor() {
    super();
    this.selection = "";
  }

  public get getSelection(): string {
    return this.selection;
  }

  public set setSelection(selection: string) {
    this.selection = selection;
    this.navigateObservers();
  }
}

export default ListBox;
