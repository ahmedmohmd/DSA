import Component from "./component";

class Shape implements Component {
  private type: string;

  constructor(type: string) {
    this.type = type;
  }

  public render(): void {
    console.log(this.type, " Rendered Successfully...");
  }
}

export default Shape;
