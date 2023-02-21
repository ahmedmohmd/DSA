import Filter from "./filter";
import Image from "./image";

class ImageView {
  private _image: Image;

  constructor(image: Image) {
    this._image = image;
  }

  public apply(filter: Filter): void {
    filter.apply(this._image);
  }
}

export default ImageView;
