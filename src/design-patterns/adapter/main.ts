import Caramel from "./ava-filters/caramel-filter";
import CaramaleAdapter from "./ava-filters/caramle-adapter";
import Image from "./image";
import ImageView from "./image-view";
import VividFilter from "./vivid-filter";

class Main {
  public static render(): void {
    const image = new Image();
    const imageView = new ImageView(image);

    // Vivid Filter
    const vividFilter = new VividFilter();

    // Caramle Filter Adaptation
    const caramleFilter = new Caramel();
    const caramleAdapter = new CaramaleAdapter(caramleFilter);

    // Applying Filters
    imageView.apply(vividFilter);
    imageView.apply(caramleAdapter);
  }
}

export default Main;
