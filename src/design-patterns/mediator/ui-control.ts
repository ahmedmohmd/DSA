import DialogBox from "./dialog-box";

class UiControl extends DialogBox {
  protected owner: DialogBox;

  constructor(dialogBox: DialogBox) {
    super();
    this.owner = dialogBox;
  }

  public changed(control: UiControl) {}
}

export default UiControl;
