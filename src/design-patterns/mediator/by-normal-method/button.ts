import DialogBox from "./dialog-box";
import UiControl from "./ui-control";

class Button extends UiControl {
  private isEnabled: boolean;

  constructor(dialogBox: DialogBox) {
    super(dialogBox);

    this.isEnabled = false;
  }

  public get getIsEnabled(): boolean {
    return this.isEnabled;
  }

  public set setIsEnabled(isEnable: boolean) {
    this.isEnabled = isEnable;

    this.owner.changed(this);
  }
}

export default Button;
