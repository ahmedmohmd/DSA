class DocumentState {
  private word: string;

  constructor(word: string) {
    this.word = word;
  }

  public get getWord(): string {
    return this.word;
  }
}

export default DocumentState;
