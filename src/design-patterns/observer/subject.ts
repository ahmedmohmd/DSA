import Observer from "./observer";

class Subject {
  private observers: Array<Observer>;

  constructor() {
    this.observers = [];
  }

  public addObserver(observer: Observer) {
    this.observers.push(observer);
  }

  public removeObserver(observer: Observer) {
    this.observers = this.observers.filter((o) => Object.is(o, observer));
  }

  notifyObservers(): void {
    for (let observer of this.observers) {
      observer.update();
    }
  }
}

export default Subject;
