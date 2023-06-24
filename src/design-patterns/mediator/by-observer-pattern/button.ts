import UiControl from "./ui-control";

class Button extends UiControl {
  private isEnabled: boolean;

  constructor() {
    super();
    this.isEnabled = false;
  }

  public get getIsEnabled(): boolean {
    return this.isEnabled;
  }

  public set setIsEnabled(isEnable: boolean) {
    this.isEnabled = isEnable;
    this.navigateObservers();
  }
}

export default Button;
