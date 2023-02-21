import Component from "./component";

class Group implements Component {
  private _objects: Component[];

  constructor() {
    this._objects = [];
  }

  public add(object: Component): void {
    this._objects.push(object);
  }

  public render(): void {
    for (let shape of this._objects) {
      shape.render();
    }
  }
}

export default Group;
