import Compressor from "./compressor";
import Filter from "./filter";

class ImageStorage {
  compressor: Compressor;
  filter: Filter;

  constructor(compressor: Compressor, filter: Filter) {
    this.compressor = compressor;
    this.filter = filter;
  }

  store(filename: string) {
    this.compressor.compress(filename);
    this.filter.apply(filename);
  }
}

export default ImageStorage;
