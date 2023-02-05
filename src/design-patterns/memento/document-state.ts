class DocumentState {
  private content: string;

  constructor(content: string) {
    this.content = content;
  }

  public get getContent(): string {
    return this.content;
  }
}

export default DocumentState;
