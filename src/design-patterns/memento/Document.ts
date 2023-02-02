import DocumentState from "./DocumentState";

class Document {
  private word: string;

  public createState(): DocumentState {
    return new DocumentState(this.word);
  }

  public restore(state: DocumentState): void {
    this.word = state.getWord;
  }

  public setWord(word: string): void {
    this.word = word;
  }
}

export default Document;
