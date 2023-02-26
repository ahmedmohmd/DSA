import EBook from "./ebook";
import RealEBook from "./real-ebook";

class EBookProxy implements EBook {
  private fileName: string;
  private ebook: RealEBook;

  constructor(fileName: string) {
    this.fileName = fileName;
    this.ebook = null;
  }

  public show(): void {
    if (this.ebook === null) {
      this.ebook = new RealEBook(this.fileName);
    }

    this.ebook.show();
  }

  public getFileName(): string {
    return this.fileName;
  }
}

export default EBookProxy;
