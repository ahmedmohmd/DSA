import UiControl from "./ui-control";

class TextBox extends UiControl {
  private content: string;

  constructor(content: string) {
    super();
    this.content = content;
  }

  public get getContent(): string {
    return this.content;
  }

  public set setContent(value: string) {
    this.content = value;
    this.navigateObservers();
  }
}

export default TextBox;
