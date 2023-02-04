import DocumentState from "./document-state";

class Document {
  private word: string;

  public createState(): DocumentState {
    return new DocumentState(this.word);
  }

  public restore(state: DocumentState): void {
    this.word = state.getWord;
  }

  public write(word: string): void {
    this.word = word;
  }
}

export default Document;
