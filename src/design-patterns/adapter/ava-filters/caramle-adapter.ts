import Image from "../image";
import Caramel from "./caramel-filter";

class CaramaleAdapter {
  private caramel: Caramel;

  constructor(caramel: Caramel) {
    this.caramel = caramel;
  }

  public apply(image: Image): void {
    this.caramel.render(image);
  }
}

export default CaramaleAdapter;
