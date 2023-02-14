import HttpRequest from "./http-request";

abstract class Handler {
  private next: Handler;

  constructor(next: Handler) {
    this.next = next;
  }

  public handle(request: HttpRequest) {
    if (this.doHandle(request)) {
      return;
    }

    if (this.next) this.next.handle(request);
  }

  public abstract doHandle(request: HttpRequest): boolean;
}

export default Handler;
