import Button from "./button";
import ListBox from "./list-box";
import TextBox from "./text-box";
import UiControl from "./ui-control";

class AcrtielsDialogBox {
  private articlesListBox: ListBox;
  private titleTextBox: TextBox;
  private saveButton: Button;

  constructor() {
    this.titleTextBox = new TextBox("");
    this.articlesListBox = new ListBox();
    this.saveButton = new Button();

    this.articlesListBox.attach({
      update: () => {
        this.articleSelected();
      },
    });

    this.titleTextBox.attach({
      update: () => {
        this.titleChanged();
      },
    });
  }

  private titleChanged() {
    const content = this.titleTextBox.getContent;
    const isEmpty = !content;

    if (isEmpty) {
      this.saveButton.setIsEnabled = false;
    } else {
      this.saveButton.setIsEnabled = true;
    }
  }

  private articleSelected() {
    this.titleTextBox.setContent = this.articlesListBox.getSelection;
    this.saveButton.setIsEnabled = true;
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
