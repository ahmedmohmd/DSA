import Filter from "./filter";

class BWFilter implements Filter {
  apply(fileName: string): void {
    console.log(`Filter (${fileName}) with Black and White Filter...`);
  }
}

export default BWFilter;
