import Image from "../image";
import Caramel from "./caramel-filter";

class CaramaleAdapter {
  private _caramel: Caramel;

  constructor(caramel: Caramel) {
    this._caramel = caramel;
  }

  public apply(image: Image): void {
    this._caramel.render(image);
  }
}

export default CaramaleAdapter;
