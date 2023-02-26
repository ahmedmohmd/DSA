import EBook from "./ebook";

class RealEBook implements EBook {
  private fileName: string;

  constructor(fileName: string) {
    this.fileName = fileName;
    this.load();
  }

  private load() {
    console.log("Loading the RealEBook: ", this.fileName);
  }

  public show(): void {
    console.log("Showing the RealEBook: ", this.fileName);
  }

  public getFileName(): string {
    return this.fileName;
  }
}

export default RealEBook;
