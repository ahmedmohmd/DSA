import Image from "./image";

interface Filter {
  apply(image: Image): void;
}

export default Filter;
