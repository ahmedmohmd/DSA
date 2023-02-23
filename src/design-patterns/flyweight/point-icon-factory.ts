import PointIcon from "./point-icon";
import PointType from "./point-type";

class PointIconFactory {
  private icons: Map<PointType, PointIcon>;

  constructor() {
    this.icons = new Map();
  }

  public getPointIcon(type: PointType): PointIcon {
    const isIconFound = this.icons.has(type);

    if (!isIconFound) {
      const icon = new PointIcon(type, null);
      this.icons.set(type, icon);
    }

    return this.icons.get(type);
  }
}

export default PointIconFactory;
