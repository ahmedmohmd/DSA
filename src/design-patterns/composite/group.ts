import Component from "./component";
import Shape from "./shape";

class Group implements Component {
  private objects: Component[];

  constructor() {
    this.objects = [];
  }

  public add(object: Component): void {
    this.objects.push(object);
  }

  public render(): void {
    for (let shape of this.objects) {
      shape.render();
    }
  }
}

export default Group;
