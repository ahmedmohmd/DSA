import PointService from "./point-service";

class Main {
  public static render(): void {
    const pointService = new PointService();

    for (let point of pointService.getPoints()) {
      point.draw();
    }
  }
}

export default Main;
