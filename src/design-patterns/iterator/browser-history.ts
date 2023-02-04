import ArrayIetrator from "./array-iterator";

class BrowserHistory<T> {
  private urls: T[];

  constructor() {
    this.urls = [];
  }

  public push(url: T): void {
    this.urls.push(url);
  }

  public pop(): T {
    return this.urls.pop();
  }

  public createIterator() {
    return new ArrayIetrator<T>(this);
  }

  public get getUrls(): T[] {
    return this.urls;
  }
}

export default BrowserHistory;
