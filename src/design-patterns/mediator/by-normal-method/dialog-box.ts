import UiControl from "./ui-control";

abstract class DialogBox {
  public abstract changed(control: UiControl): void;
}

export default DialogBox;
