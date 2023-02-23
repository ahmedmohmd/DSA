import PointType from "./point-type";

class PointIcon {
  private type: PointType;
  private icon: number[];

  constructor(type: PointType, icon: number[]) {
    this.type = type;
    this.icon = icon;
  }

  public get getType(): PointType {
    return this.type;
  }
}

export default PointIcon;
