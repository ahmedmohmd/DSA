import Filter from "./filter";
import Image from "./image";

class VividFilter implements Filter {
  apply(image: Image): void {
    console.log("Vivid Filter applied...");
  }
}

export default VividFilter;
