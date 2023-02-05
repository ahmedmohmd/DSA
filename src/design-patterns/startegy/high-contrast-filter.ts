import Filter from "./filter";

class HighContrastFilter implements Filter {
  apply(fileName: string): void {
    console.log(`Filter (${fileName}) with High Contrast Filter...`);
  }
}

export default HighContrastFilter;
