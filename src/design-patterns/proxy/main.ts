import EBookProxy from "./ebook-proxy";
import Library from "./library";
import { default as EBook, default as RealEBook } from "./real-ebook";

class Main {
  public static render(): void {
    const library = new Library();
    const fileNames = ["a", "b", "c"];

    for (let fileName of fileNames) {
      library.add(new EBookProxy(fileName));
    }

    library.openEbook("a");
    library.openEbook("b");
  }
}

export default Main;
