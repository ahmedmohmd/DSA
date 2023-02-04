import BrowserHistory from "./BrowserHistory";

class ArrayIetrator<T> implements Iterator<T> {
  private history: BrowserHistory<T>;
  private index: number;

  constructor(history: BrowserHistory<T>) {
    this.history = history;
    this.index = 0;
  }

  public isNext(): boolean {
    return this.index < this.history.getUrls.length;
  }

  public next(): void | undefined | any {
    this.index++;
  }

  public current(): T {
    return this.history.getUrls[this.index];
  }
}

export default ArrayIetrator;
