import Observer from "./observer";

interface Subject {
  attach(observer: Observer): void;
  navigateObservers(): void;
}

export default Subject;
