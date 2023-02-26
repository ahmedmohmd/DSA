import EBook from "./ebook";
import RealEBook from "./real-ebook";

class Library {
  private ebooks: Map<string, EBook>;

  constructor() {
    this.ebooks = new Map();
  }

  public add(ebook: EBook): void {
    this.ebooks.set(ebook.getFileName(), ebook);
  }

  public openEbook(fileName: string): any {
    return this.ebooks.get(fileName)?.show();
  }
}

export default Library;
