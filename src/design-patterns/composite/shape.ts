import Component from "./component";

class Shape implements Component {
  private _type: string;

  constructor(type: string) {
    this._type = type;
  }

  public render(): void {
    console.log(this._type, " Rendered Successfully...");
  }
}

export default Shape;
