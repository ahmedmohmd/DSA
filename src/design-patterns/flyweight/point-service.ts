import Point from "./point";
import PointIconFactory from "./point-icon-factory";
import PointType from "./point-type";

class PointService {
  private iconFactory: PointIconFactory;

  constructor() {
    this.iconFactory = new PointIconFactory();
  }

  public getPoints(): Point[] {
    const points = [];
    const point = new Point(
      1,
      2,
      this.iconFactory.getPointIcon(PointType.CAFFEE)
    );

    points.push(point);

    return points;
  }
}

export default PointService;
