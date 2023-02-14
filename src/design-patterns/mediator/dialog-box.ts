import UiControl from "./ui-control";

abstract class DialogBox {
  public abstract changed(control: UiControl);
}

export default DialogBox;
