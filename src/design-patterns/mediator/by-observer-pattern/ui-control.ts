import Observer from "./observer";
import Subject from "./subject";

class UiControl implements Subject {
  private observers: Array<Observer>;

  constructor() {
    this.observers = [];
  }

  attach(observer: Observer): void {
    this.observers.push(observer);
  }

  navigateObservers(): void {
    for (let observer of this.observers) {
      observer.update();
    }
  }
}

export default UiControl;
