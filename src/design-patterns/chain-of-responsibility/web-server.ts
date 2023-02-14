import Handler from "./handler";
import HttpRequest from "./http-request";

class WebServer {
  private handler: Handler;

  constructor(handler: Handler) {
    this.handler = handler;
  }

  public handle(request: HttpRequest) {
    this.handler.handle(request);
  }
}

export default WebServer;
