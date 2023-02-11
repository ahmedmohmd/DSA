import Subject from "./subject";

class DataSource extends Subject {
  private value: string;

  constructor(value: string) {
    super();
    this.value = value;
  }

  public get getValue(): string {
    return this.value;
  }

  public set setValue(value: string) {
    this.value = value;
    this.notifyObservers();
  }
}

export default DataSource;
