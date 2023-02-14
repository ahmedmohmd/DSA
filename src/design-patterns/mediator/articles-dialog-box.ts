import Button from "./button";
import DialogBox from "./dialog-box";
import ListBox from "./list-box";
import TextBox from "./text-box";
import UiControl from "./ui-control";

class AcrtielsDialogBox extends DialogBox {
  private articlesListBox: ListBox;
  private titleTextBox: TextBox;
  private saveButton: Button;

  constructor() {
    super();
    this.articlesListBox = new ListBox(this);
    this.titleTextBox = new TextBox(this, "Save");
    this.saveButton = new Button(this);
  }

  public changed(control: UiControl) {
    if (control === this.articlesListBox) {
      this.titleTextBox.setContent = this.articlesListBox.getSelection;
      this.saveButton.setIsEnabled = true;
    } else if (control === this.titleTextBox) {
      if (this.titleTextBox.getContent) {
        this.saveButton.setIsEnabled = true;
      } else {
        this.saveButton.setIsEnabled = false;
      }
    }
  }

  public semulateUserInteraction() {
    this.articlesListBox.setSelection = "Article 1";
    this.titleTextBox.setContent = "";
    this.titleTextBox.setContent = "Article 2";
    console.log("Text Box: " + this.titleTextBox.getContent);
    console.log("Button: " + this.saveButton.getIsEnabled);
  }
}

export default AcrtielsDialogBox;
