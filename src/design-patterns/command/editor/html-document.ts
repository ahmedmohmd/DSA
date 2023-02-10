class HtmlDocument {
  private content: string;

  public setContent(content: string) {
    this.content = content;
  }

  public makeBold() {
    this.content = `<b>${this.content}</b>`;
  }

  public get getContent() {
    return this.content;
  }
}

export default HtmlDocument;
