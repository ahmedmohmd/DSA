import Filter from "./filter";
import Image from "./image";

class ImageView {
  private image: Image;

  constructor(image: Image) {
    this.image = image;
  }

  public apply(filter: Filter): void {
    filter.apply(this.image);
  }
}

export default ImageView;
