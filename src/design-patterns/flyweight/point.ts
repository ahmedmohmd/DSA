import PointIcon from "./point-icon";
import PointType from "./point-type";

class Point {
  private x: number;
  private y: number;
  private icon: PointIcon;

  constructor(x: number, y: number, icon: PointIcon) {
    this.x = x;
    this.y = y;
    this.icon = icon;
  }

  public draw(): void {
    console.log(`${this.icon.getType} at (${this.x}, ${this.y})`);
  }
}

export default Point;
