import DialogBox from "./dialog-box";
import UiControl from "./ui-control";

class TextBox extends UiControl {
  private content: string;

  constructor(dialogBox: DialogBox, content: string) {
    super(dialogBox);
    this.content = content;
  }

  public get getContent(): string {
    return this.content;
  }

  public set setContent(value: string) {
    this.content = value;
    this.owner.changed(this);
  }
}

export default TextBox;
