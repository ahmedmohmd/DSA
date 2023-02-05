import DocumentState from "./document-state";

class Document {
  private content: string;

  public createState(): DocumentState {
    return new DocumentState(this.content);
  }

  public restore(state: DocumentState): void {
    this.content = state.getContent;
  }

  public write(content: string): void {
    this.content = content;
  }
}

export default Document;
